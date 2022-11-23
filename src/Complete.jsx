import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 200px;
  cursor: pointer;
  .ant-btn {
    margin: 10px;
  }
`;

export default function Complete() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Result
        status="success"
        title="예약되었습니다"
        subTitle="예약되었습니다. 학생증을 찍고 들어가주세요"
      />
      <Button
        type="primary"
        size="large"
        key="console"
        onClick={() => navigate("/")}
      >
        처음으로
      </Button>
      ,
      <Button key="buy" size="large" onClick={() => navigate("/reservation")}>
        다시 예약하기
      </Button>
    </Wrap>
  );
}
