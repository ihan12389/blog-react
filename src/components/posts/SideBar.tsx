import React from "react";
import styled from "styled-components";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../actions/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

/* STYLE */
const SideMenu = styled(DropdownButton)`
  margin: 3px;
  position: absolute;
  font-family: "Righteous", cursive;
  @media (max-width: 760px) {
    position: relative;
    margin-bottom: 30px;
  }
  @media (min-width: 760px) {
    position: relative;
    margin-bottom: 30px;
  }
  @media (min-width: 992px) {
    position: absolute;
    top: 165px;
    right: 20px;
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: 165px;
    right: 100px;
  }
`;

const NicknameItem = styled.div`
  width: 100%;
  margin-top: -10px;
  padding: 7px 5px;
  font-family: "Roboto Mono", monospace;
  background-color: #eeeeee;
  font-size: 16px;
  color: #66a6ff;
  text-align: center;
`;

const SideBar = () => {
  /* REDUX */
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);
  /* LOGOUT */
  const logout = () => {
    dispatch(AuthActions.logout());
    alert("로그아웃 했습니다.");
  };

  return (
    <SideMenu
      id="dropdown-item-button"
      variant="outline-secondary"
      title="Menu"
    >
      {authState.uid === undefined ? (
        <>
          <Dropdown.Item as={Link} to="/">
            Main
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/login">
            Log In
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/signup">
            Sign Up
          </Dropdown.Item>
        </>
      ) : (
        <>
          <NicknameItem>{authState.nickname}</NicknameItem>
          <Dropdown.Item as={Link} to="/">
            Main
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/write">
            Write
          </Dropdown.Item>
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        </>
      )}
    </SideMenu>
  );
};

export default SideBar;
