import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "../style/fonts.css";
import { Link, Redirect } from "react-router-dom";
import { RootState } from "../reducers";
import { AuthState } from "../reducers/auth";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../apis/auth";

const SignupWrapper = styled(Container)`
  padding: 0;
  background-image: url("./images/13.jpg");
  background-size: cover;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .signupTitle {
    font-family: "Roboto Mono", monospace;
    color: white;
    margin-bottom: 20px;
    font-size: 25px;
  }

  @media (min-height: 550px) {
    height: 100%;
  }
  @media (min-width: 760px) {
    width: 760px;
    .signupTitle {
      font-size: 40px;
    }
  }
  @media (min-width: 992px) {
    width: 970px;
    .signupTitle {
      font-size: 45px;
    }
  }
  @media (min-width: 1200px) {
    width: 1100px;
    .signupTitle {
      font-size: 50px;
    }
  }
`;

const SignupForm = styled(Form)`
  margin-top: 20px;
  label {
    color: white;
  }
  .text-muted {
  }
  @media (min-width: 760px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
    label {
      font-size: 20px;
    }
  }
`;

const ButtonWrapper = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SignupContainer = ({ history }: any) => {
  const disaptch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    // Store의 AUTH 정보 출력
    console.log(authState);

    if (authState.uid !== undefined) {
      alert("로그인 되어 있는 상태입니다.");
      history.push("/");
    }
  }, [authState]);

  const updateEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const updateCheckPassword = (event: any) => {
    setCheckPassword(event.target.value);
  };
  const updateNickname = (event: any) => {
    setNickname(event.target.value);
  };

  const submit = async (event: any) => {
    event.preventDefault();
    console.log(email, password, nickname);
    if (email === "" || password === "" || nickname === "") {
      alert("텍스트를 입력해주세요.");
    } else if (password === checkPassword) {
      const result = await signup({ email, password, nickname });
      if (result === 1) {
        alert("회원가입 되었습니다.");
        await history.replace("/login");
      } else if (result === 0) {
        alert("이미 존재하는 회원정보입니다.");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } else {
      alert("비밀번호가 다릅니다..");
    }
  };

  return (
    <SignupWrapper>
      <span className="signupTitle">WELCOME! SIGN UP HERE</span>
      <SignupForm onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={updateEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={updatePassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckPassword">
          <Form.Label>Check Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Check password"
            value={checkPassword}
            onChange={updateCheckPassword}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNickname">
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={updateNickname}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <ButtonWrapper>
          <Link to="/">
            <Button variant="dark">Back</Button>
          </Link>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </ButtonWrapper>
      </SignupForm>
    </SignupWrapper>
  );
};

export default SignupContainer;
