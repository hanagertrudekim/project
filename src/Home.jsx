import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: center;
  align-items: center;
`;
const TextWrap = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid #3b5087;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
`;

const Text = styled.div`
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <TextWrap onClick={() => navigate("/reservation")}>
        <Text>예약하기</Text>
      </TextWrap>
      <TextWrap onClick={() => navigate("/return/check")}>
        <Text>반납하기</Text>
      </TextWrap>
    </Wrap>
  );
}
