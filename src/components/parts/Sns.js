import React from "react";
import styled from "styled-components";

const SnsBox = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
  width: 242px;
`;

const Kakao = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;

const Google = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;

const Line = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;

const Twitter = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;

const Sns = () => {

  const onKakao = e => {
    console.log('Hi Kakao!');
  }
  const onGoogle = e => {
    console.log('Hi Google!');
  }
  const onLine = e => {
    console.log('Hi Line!');
  }
  const onTwitter = e => {
    console.log('Hi Twitter!');
  }

  return (
    <SnsBox>
      <Kakao src={require("../../images/sns/kakao.png")} onClick={onKakao}/>
      <Google src={require("../../images/sns/google.png")} onClick={onGoogle}/>
      <Line src={require("../../images/sns/line.png")} onClick={onLine}/>
      <Twitter src={require("../../images/sns/twitter.png")} onClick={onTwitter}/>
    </SnsBox>
  );
};

export default Sns;
