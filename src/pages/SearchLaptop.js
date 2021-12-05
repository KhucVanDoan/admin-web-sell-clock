import { Button, Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getLaptop } from "../api";
import HomeLayout from "../components/HomeLayout";

export default function SearchLaptop() {
  const [laptop, setLaptop] = useState([]);
  useEffect(() => {
    async function fetchLaptop() {
      const response = await getLaptop();
      setLaptop(response.data.data);
      console.log(response.data.data);
    }
    fetchLaptop();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Ten Laptop",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <HomeLayout>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
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
      </div> */}
      <h2 style={{ textAlign: "center" }}>Danh sách laptop</h2>
      <Table columns={columns} dataSource={laptop} />
    </HomeLayout>
  );
}
