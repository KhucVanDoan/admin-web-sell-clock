import { Button, Table, Tag } from "antd";
import React from "react";
import HomeLayout from "../components/HomeLayout";

export default function Explain() {
  const columns = [
    {
      title: "STT",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "r",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "TG",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "SAT",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
  ];

  return (
    <HomeLayout>
      <h1>
        Dựa vào những thông tin bạn vừa chọn ta có bảng giải thích bằng thuật
        toán suy diễn như sau
      </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="primary">Quay lại</Button>
        <Button type="primary">Reset</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </HomeLayout>
  );
}
