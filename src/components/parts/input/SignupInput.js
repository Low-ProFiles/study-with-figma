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
  &:hover{
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

const SignupInput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const onChangeName = (e) => {
    const userNameRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,}/;
    if (!e.target.value || userNameRegex.test(e.target.value))
      setNameError(false);
    else setNameError(true);
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    const userEmailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{,3}$/i;
    if (!e.target.value || userEmailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const onClick = (e) => {
    console.log("Register!");
  };

  return (
    <InputDiv>
      <InfoDiv>
        <InforMation
          placeholder={props.text1}
          value={name}
          onChange={onChangeName}
        />
        {nameError && <ErrorMessage>올바르지 않은 이름입니다.</ErrorMessage>}
        <InforMation
          placeholder={props.text2}
          value={email}
          onChange={onChangeEmail}
        />
        {emailError && <ErrorMessage>올바르지 않은 이메일입니다.</ErrorMessage>}
        <InforMation placeholder={props.text3} type="password"/>
      </InfoDiv>
      <LoginButton onClick={onClick}>회원가입</LoginButton>
    </InputDiv>
  );
};

export default SignupInput;
