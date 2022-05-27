import React from "react";
import styled from "styled-components";

const RowDiv = styled.img`
  margin: 20px auto;
  height: 42px;
  width: 334px;
  border-radius: 0px;
`;

const Row = () => {
  return <RowDiv src={require("../../images/row/row.png")} />;
};

export default Row;
