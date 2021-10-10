import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "../style/fonts.css";
import { Link, useHistory } from "react-router-dom";
import { RootState } from "../reducers";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../apis/auth";

/* STYLE */
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

const SignupContainer = ({ props }: any) => {
  /* MAKE HISTORY */
  const history = useHistory();
  /* REDUX */
  const disaptch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);
  /* USESTATE */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [checkPasswordMsg, setCheckPasswordMsg] = useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  /* INIT SETTING */
  useEffect(() => {
    if (authState.uid !== undefined) {
      history.push("/");
    }
  }, [authState]);
  /* UPDATE TEXT */
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
  /* SUBMIT */
  const submit = async (event: any) => {
    event.preventDefault();
    if (email.replaceAll(" ", "").length === 0) {
      setEmailMsg("이메일을 입력해주세요.");
      return;
    } else {
      setEmailMsg("");
    }
    if (password.replaceAll(" ", "").length === 0) {
      setPasswordMsg("비밀번호를 입력해주세요.");
      return;
    } else {
      setPasswordMsg("");
    }
    if (password !== checkPassword) {
      setCheckPasswordMsg("비밀번호가 다릅니다.");
      return;
    } else {
      setCheckPasswordMsg("");
    }
    if (nickname.replaceAll(" ", "").length === 0) {
      setNicknameMsg("닉네임을 입력해주세요.");
      return;
    } else {
      setNickname("");
    }

    const result = await signup({ email, password, nickname });
    if (result === 1) {
      alert("회원가입 되었습니다.");
      history.push("/login");
    } else if (result === 0) {
      setErrMsg("이미 존재하는 회원정보입니다.");
    } else {
      setErrMsg("데이터베이스 오류가 발생했습니다.");
    }
  };

  return (
    <>
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
              <br />
              {emailMsg === "" ? <></> : <ErrMsg>{emailMsg}</ErrMsg>}
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
            {passwordMsg === "" ? <></> : <ErrMsg>{passwordMsg}</ErrMsg>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckPassword">
            <Form.Label>Check Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Check password"
              value={checkPassword}
              onChange={updateCheckPassword}
            />
            {checkPasswordMsg === "" ? (
              <></>
            ) : (
              <ErrMsg>{checkPasswordMsg}</ErrMsg>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNickname">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={updateNickname}
            />
            {nicknameMsg === "" ? <></> : <ErrMsg>{nicknameMsg}</ErrMsg>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          {errMsg === "" ? <></> : <ErrMsg>{errMsg}</ErrMsg>}
          <ButtonWrapper>
            <Button variant="dark" onClick={() => history.goBack()}>
              Back
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </ButtonWrapper>
        </SignupForm>
      </SignupWrapper>
    </>
  );
};

export default SignupContainer;
