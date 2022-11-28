import { Button, Space, Tag } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { Table, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  padding: 120px 280px 0;
  cursor: pointer;
`;

export default function Reservation() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/reservation/complete");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "번호",
      dataIndex: "번호",
      width: 150,
    },
    {
      title: "이용 여부",
      dataIndex: "use",
      width: 230,
      render: (_, { use }) => (
        <>
          {use?.map((use) => {
            let color = "green";
            return (
              <Tag color={color} key={use} onClick={showModal}>
                {use}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "최대 이용 시간",
      dataIndex: "최대 이용 시간",
      width: 250,
    },
    {
      title: "예약하기",
      key: "예약하기",
      dataIndex: "예약하기",
      render: (_, { tags }) => (
        <>
          {tags?.map((tag) => {
            let color = "blue";
            return (
              <Tag color={color} key={tag} onClick={showModal}>
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
      use: ["이용 가능"],
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
          scroll={{ y: 450 }}
        />
      </Space>
      <Modal
        title="예약하기"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            취소
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            확인
          </Button>,
        ]}
      >
        <p>해당 자리를 예약하시겠습니까 ?</p>
      </Modal>
    </Wrap>
  );
}
