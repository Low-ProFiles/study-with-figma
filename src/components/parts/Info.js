import React from "react";
import styled from "styled-components";

const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 334px;
  height: 28px;
  & + & {
    margin-top: 4px;
  }
`;

const InfoText = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  /* pink */

  color: #fb226a;
`;

const Info = (props) => {
  return (
      <InfoDiv>
        <InfoText>
          <span style={{ color: "#a6a6a6" }}>{props.text1} &nbsp;</span>
          {props.text2}
        </InfoText>
      </InfoDiv>
      
  );
};

export default Info;
