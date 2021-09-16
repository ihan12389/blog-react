import React from "react";
import styled from "styled-components";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideMenu = styled(DropdownButton)`
  margin: 3px;
  position: absolute;
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

const SideBar = () => {
  return (
    <SideMenu
      id="dropdown-item-button"
      variant="outline-secondary"
      title="Menu"
    >
      <Dropdown.Item as={Link} to="/">
        Main
      </Dropdown.Item>
      <Dropdown.Item>Logout</Dropdown.Item>
    </SideMenu>
  );
};

export default SideBar;
