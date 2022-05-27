import React from "react";
import styled from "styled-components";

const LogoBox = styled.div`
  text-align: center;
  margin: 30px auto 27px auto;
  width: 198px;
`;

const LogoImg = styled.img`
  height: 38px;
  width: 198px;
`;

const LogoText = styled.p`
  width: 100%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #000000;
`;
const Logo = (props) => {
  return (
    <LogoBox>
      <LogoImg src={require("../../images/logo/watchapedia.png")} />
      <LogoText>{props.text}</LogoText>
    </LogoBox>
  );
};

export default Logo;
