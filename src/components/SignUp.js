import React, { useState } from "react";
import styled from "styled-components";

import Info from "./parts/Info";
import SignupInput from "./parts/input/SignupInput";
import SignIn from "./SignIn";
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
  max-height: 580px;
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
  margin-left: 213px;
  margin-top: -23px;
  width: 42px;
  height: 18px;
  opacity: 0;
`;

const SignUp = ({ SignupClose }) => {
  const [SigninOpen, setSigninOpen] = useState(false);
  const SigninClose = () => {
    setSigninOpen(!SigninOpen);
  };
  const onSignupClose = (e) => {
    if (e.target === e.currentTarget) {
      console.log(e);
      console.log(e.target);
      console.log(e.currentTarget);
      SignupClose();
    }
  };
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <ModalBackground onClick={onSignupClose}>
      <ModalPosition>
        <ModalBody className="ModalBody">
          <Logo text="회원가입" />
          <SignupInput text1="이름" text2="이메일" text3="비밀번호" />
          <InfoBody>
            <Info text1="이미 가입하셨나요?" text2="로그인" />
            <ClickButton onClick={SigninClose}></ClickButton>
            {SigninOpen && <SignIn SigninClose={SigninClose}></SignIn>}
          </InfoBody>
          <Row />
          <Sns />
        </ModalBody>
      </ModalPosition>
    </ModalBackground>
  );
};

export default SignUp;
