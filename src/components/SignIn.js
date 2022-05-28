import React, { useState } from "react";
import styled from "styled-components";

import Info from "./parts/Info";
import SigninInput from "./parts/input/SigninInput";
import SignUp from "./SignUp";
import Logo from "./parts/Logo";
import Row from "./parts/Row";
import Sns from "./parts/Sns";

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
`;

const ModalPosition = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 374px;
  max-height: 600px;
  padding: 30px 20px;

  background: #ffffff;
  border-radius: 8px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const InfoBody = styled.div`
  margin-top: 10px;
  width: 334px;
  height: 60px;
`;

const ClickButton = styled.button`
  position: absolute;
  margin-left: 205px;
  margin-top: -23px;
  width: 58px;
  height: 18px;
  opacity: 0;
`

const SignIn = ({ SigninClose }) => {
  const [SignupOpen, setSignupOpen] = useState(false);
  const SignupClose = () => {
    setSignupOpen(!SignupOpen);
  };
  const onSigninClose = (e) => {
    if (e.target === e.currentTarget) {
      SigninClose();
    }
  };
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <ModalBackground onClick={onSigninClose}>
      <ModalPosition>
        <ModalBody className="ModalBody">
          <Logo text="로그인" />
          <SigninInput text1="이메일" text2="비밀번호" />
          <InfoBody>
            <Info text2="비밀번호를 잊어버리셨나요?" />
            <Info text1="계정이 없으신가요?" text2="회원가입"></Info>
            <ClickButton onClick={SignupClose}></ClickButton>
            {SignupOpen&&<SignUp SignupClose={SignupClose}></SignUp>}
          </InfoBody>
          <Row />
          <Sns />
        </ModalBody>
      </ModalPosition>
    </ModalBackground>
  );
};

export default SignIn;
