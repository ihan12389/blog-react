import React, { useEffect, useState } from "react";
import {
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  SplitButton,
} from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";

/* STYLE */
const SearchContainer = styled(Container)`
  width: 200px;
  position: absolute;
  height: 60px;
  top: 570px;
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

const HeaderSearch = () => {
  /* MAKE HISTORY */
  const history = useHistory();
  /* USE STATE */
  const [search, setSearch] = useState("");
  const [target, setTarget] = useState("");
  /* INIT SETTING */
  useEffect(() => {
    document.querySelector("#segmented-button-dropdown-2")!.innerHTML =
      "Select";
  }, []);
  /* SUBMIT */
  const submit = () => {
    if (search === "" || target === "") {
      alert("검색어와 기준을 모두 선택해주세요.");
      return;
    }
    history.push("/lihano-board/posts/1", {
      search: search,
      target: target,
    });
  };
  /* CHECK SUBMIT */
  const isSubmit = (event: any) => {
    if (event.charCode === "13") {
      history.push("/lihano-board/posts/1", {
        search: search,
        target: target,
      });
    }
  };
  /* UPDATE TARGET */
  const clickButton = (event: any) => {
    const text = event.target.innerHTML;
    document.querySelector("#segmented-button-dropdown-2")!.innerHTML = text;
    setTarget(text);
  };

  return (
    <SearchContainer>
      <SearchInputGroup className="mb-3">
        <FormControl
          aria-label="Text input with dropdown button"
          placeholder="Type your Interesting..☆"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onSubmit={submit}
          onKeyPress={isSubmit}
        />
        <SplitButton
          variant="outline-secondary"
          title="Search"
          id="segmented-button-dropdown-2"
          alignRight
          onClick={submit}
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

export default HeaderSearch;
