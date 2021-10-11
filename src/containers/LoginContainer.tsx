import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "../style/fonts.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { login } from "../apis/auth";
import { AuthActions } from "../actions/auth";

/* STYLE */
const LoginWrapper = styled(Container)`
  padding: 0;
  background-image: url("./images/13.jpg");
  background-size: cover;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loginTitle {
    font-family: "Roboto Mono", monospace;
    color: white;
    margin-bottom: 20px;
  }

  @media (min-height: 340px) {
    height: 100%;
    .loginTitle {
      font-size: 25px;
    }
  }
  @media (min-width: 760px) {
    width: 760px;
    .loginTitle {
      font-size: 40px;
    }
  }
  @media (min-width: 992px) {
    width: 970px;
    .loginTitle {
      font-size: 45px;
    }
  }
  @media (min-width: 1200px) {
    width: 1100px;
    .loginTitle {
      font-size: 50px;
    }
  }
`;

const LoginForm = styled(Form)`
  margin-top: 20px;
  label {
    color: white;
  }
  .text-muted {
    color: red;
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

const ErrMsg = styled.span`
  color: red;
  font-weight: bold;
`;

const ButtonWrapper = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LoginContainer = ({ history }: any) => {
  /* REDUX */
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  /* USESTATE */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  /* INPUT TEXT */
  const updateEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event: any) => {
    setPassword(event.target.value);
  };
  /* SUBMIT */
  const submitt = (event: any) => {
    event.preventDefault();
    if (email.replaceAll(" ", "").length === 0) {
      setEmailCheck("이메일을 입력해주세요");
      return;
    } else {
      setEmailCheck("");
    }
    if (password.length === 0) {
      setPasswordCheck("비밀번호를 입력해주세요.");
      return;
    } else {
      setPasswordCheck("");
    }

    dispatch(AuthActions.login({ email, password }));
    setErrMsg(authState.loginFailureMsg);
    setPassword("");
  };
  /* INIT SETTING */
  useEffect(() => {
    if (authState.uid !== undefined) {
      history.push("/");
    }
  }, [authState]);

  return (
    <LoginWrapper>
      <span className="loginTitle">WELCOME! LOG IN HERE</span>
      <LoginForm onSubmit={submitt}>
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
            <br />
            {emailCheck === "" ? <></> : <ErrMsg>{emailCheck}</ErrMsg>}
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
          <Form.Text className="text-muted">
            {passwordCheck === "" ? <></> : <ErrMsg>{passwordCheck}</ErrMsg>}
          </Form.Text>
        </Form.Group>

        {errMsg !== "" ? <ErrMsg>{errMsg}</ErrMsg> : <></>}

        <ButtonWrapper>
          <Button variant="dark" onClick={() => history.goBack()}>
            Back
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </ButtonWrapper>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginContainer;
