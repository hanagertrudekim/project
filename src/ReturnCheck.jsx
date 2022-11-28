import { Button, Result } from "antd";
import React from "react";
import { FileDoneOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  padding: 250px;
  cursor: pointer;
  .ant-result-title {
    font-size: 22px;
  }
`;

export default function ReturnCheck() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Result icon={<FileDoneOutlined />} title="학생증을 찍어주세요 " />
      <Button type="primary" size="large" onClick={() => navigate("/return")}>
        확인
      </Button>
    </Wrap>
  );
}
