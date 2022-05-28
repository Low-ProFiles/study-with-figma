import React, { useState } from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 334px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 334px;
`;

const InforMation = styled.input`
  width: 322px;
  height: 42px;
  border-radius: 8px;
  border: 0;
  padding-left: 12px;
  background: #f5f5f5;

  & + & {
    margin-top: 8px;
  }

  ::placeholder {
    width: 100px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #a6a6a6;
  }
`;

const LoginButton = styled.button`
  margin-top: 16px;
  background: #fb226a;
  border-radius: 8px;
  border: 0;
  width: 334px;
  height: 46px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  &:hover {
    background: #a6a6a6;
  }
`;

const ErrorMessage = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin: 8px 8px;
  color: #fb226a;
`;

const SigninInput = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const onChangeEmail = (e) => {
    const userEmailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || userEmailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const onClick = (e) => {
    console.log("Login!");
  };

  return (
    <InputDiv>
      <InfoDiv>
        <InforMation
          placeholder={props.text1}
          value={email}
          onChange={onChangeEmail}
          maxLength={20}
        />
        {emailError && <ErrorMessage>올바르지 않은 이메일입니다.</ErrorMessage>}
        <InforMation placeholder={props.text2} type="password" maxLength={30}/>
      </InfoDiv>
      <LoginButton onClick={onClick}>로그인</LoginButton>
    </InputDiv>
  );
};

export default SigninInput;
