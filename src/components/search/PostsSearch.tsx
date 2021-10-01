import React, { useEffect, useState } from "react";
import {
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  SplitButton,
} from "react-bootstrap";
import styled from "styled-components";

/* STYLE */
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

const PostsSearch = (props: any) => {
  /* USE STATE */
  const [search, setSearch] = useState("");
  const [target, setTarget] = useState("");
  /* INIT SETTING */
  useEffect(() => {
    document.querySelector("#segmented-button-dropdown-2")!.innerHTML =
      "Select";
  }, []);

  /* UPDATE SEARCH'S TEXT */
  const updateSearch = (event: any) => {
    setSearch(event.target.value);
  };

  /* CHANGE DROPDOWN BUTTON TEXT */
  const clickButton = (event: any) => {
    const text = event.target.innerHTML;
    document.querySelector("#segmented-button-dropdown-2")!.innerHTML = text;
    setTarget(text);
  };

  /* CLICK SUBMIT BUTTON */
  const searchClick = (event: any) => {
    console.log(search, target);
    if (search.length === 0) {
      alert("검색어를 입력해주세요.");
      return;
    }
    if (target === "") {
      alert("Action을 선택해주세요.");
      return;
    }
    props.setSearch(search);
    props.setTarget(target);
    props.setPage("1");
  };

  return (
    <SearchContainer>
      <SearchInputGroup className="mb-3">
        <FormControl
          aria-label="Text input with dropdown button"
          placeholder="Type your Interesting..☆"
          onChange={updateSearch}
          value={search}
        />
        <SplitButton
          variant="outline-secondary"
          title="Search"
          id="segmented-button-dropdown-2"
          onClick={searchClick}
          alignRight
        >
          <Dropdown.Item href="#" onClick={clickButton}>
            nickname
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={clickButton}>
            title
          </Dropdown.Item>
        </SplitButton>
      </SearchInputGroup>
    </SearchContainer>
  );
};

export default PostsSearch;
