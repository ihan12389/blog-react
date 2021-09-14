import React, { useEffect } from "react";
import {
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  SplitButton,
} from "react-bootstrap";
import styled from "styled-components";

const SearchContainer = styled(Container)`
  width: 200px;
  position: relative;
  height: 60px;
  top: -100px;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 0;
  background-color: white;

  @media (min-width: 760px) {
    width: 300px;
  }
  @media (min-width: 992px) {
    width: 400px;
  }
  @media (min-width: 1200px) {
    width: 450px;
  }
`;

const SearchInputGroup = styled(InputGroup)`
  width: 100%;
  height: 100%;
  input {
    width: 50%;
  }
  button {
    font-size: 12px;
    padding: 3px;
    span {
      margin: 0;
    }
    &::first-child {
      width: 15%;
    }
    &::last-child {
      width: 30%;
    }
  }

  @media (max-width: 760px) {
    input {
      font-size: 10px;
    }
    button {
      font-size: 12px;
    }
  }

  @media (min-width: 760px) {
    input {
      width: 50%;
    }
    button {
      font-size: 18px;
      padding: 3px;
      span {
        margin: 0;
      }
      &::first-child {
        width: 15%;
      }
      &::last-child {
        width: 30%;
      }
    }
  }

  @media (min-width: 992px) {
    input {
      width: 50%;
    }
    button {
      padding: 10px;
      &::first-child {
        width: 15%;
      }
      &::last-child {
        width: 30%;
      }
    }
  }

  @media (min-width: 1200px) {
    input {
      width: 50%;
    }
    button {
      &::first-child {
        width: 15%;
      }
      &::last-child {
        width: 30%;
      }
    }
  }
`;

function clickButton(event: any) {
  const text = event.target.innerHTML;
  document.querySelector("#segmented-button-dropdown-2")!.innerHTML = text;
}

const PostsSearch = () => {
  useEffect(() => {
    document.querySelector("#segmented-button-dropdown-2")!.innerHTML =
      "Select";
  }, []);
  return (
    <SearchContainer>
      <SearchInputGroup className="mb-3">
        <FormControl
          aria-label="Text input with dropdown button"
          placeholder="Type your Interesting..☆"
        />
        <SplitButton
          variant="outline-secondary"
          title="Search"
          id="segmented-button-dropdown-2"
          alignRight
        >
          <Dropdown.Item href="#" onClick={clickButton}>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={clickButton}>
            Action2
          </Dropdown.Item>
        </SplitButton>
      </SearchInputGroup>
    </SearchContainer>
  );
};

export default PostsSearch;
