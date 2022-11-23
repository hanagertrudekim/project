import { Button, Result } from "antd";
import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  padding: 300px;
  cursor: pointer;
  .ant-result-title {
    font-size: 30px;
  }
`;

export default function Return() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Result icon={<SmileOutlined />} title="반납되었습니다! " />
      <Button type="primary" size="large" onClick={() => navigate("/")}>
        처음으로
      </Button>
    </Wrap>
  );
}
