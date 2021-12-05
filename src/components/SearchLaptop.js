import { Button, Input, Table } from "antd";
import React from "react";

export default function SearchLaptop() {
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
    },
    {
      title: "Ten Laptop",
      dataIndex: "age",
    },
  ];
  const data = [];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 30,
          }}
        >
          <h4>ID:</h4>
          <div style={{ marginLeft: 10 }}>
            <Input placeholder="Basic usage" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: 30,
          }}
        >
          <h4>Tên Laptop: </h4>
          <div style={{ marginLeft: 10 }}>
            <Input placeholder="Basic usage" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Button type="primary">Tìm</Button>
        <Button type="primary">Thêm</Button>
        <Button type="primary">Sửa</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
