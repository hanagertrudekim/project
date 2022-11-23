import { Space, Tag } from "antd";
import React from "react";
import styled from "styled-components";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  padding: 150px 320px;
  cursor: pointer;
`;

export default function Reservation() {
  const navigate = useNavigate();

  const columns = [
    {
      title: "번호",
      dataIndex: "번호",
      width: 200,
    },
    {
      title: "이용 여부",
      dataIndex: "이용 여부",
      width: 400,
    },
    {
      title: "최대 이용 시간",
      dataIndex: "최대 이용 시간",
      width: 200,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags?.map((tag) => {
            let color = "geekblue";
            return (
              <Tag
                color={color}
                key={tag}
                onClick={() => navigate("/reservation/complete")}
              >
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      번호: `${i}`,
      "이용 여부": "사용 가능",
      "최대 이용 시간": "3시간",
      tags: ["예약하기"],
    });
  }

  return (
    <Wrap>
      <Space>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 500 }}
        />
      </Space>
    </Wrap>
  );
}
