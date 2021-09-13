import React, { useState } from "react";
import styled from "styled-components";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";

const SideMenu = styled(DropdownButton)`
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
      <Dropdown.Item>Main</Dropdown.Item>
      <Dropdown.Item>Logout</Dropdown.Item>
    </SideMenu>
  );
};

export default SideBar;
