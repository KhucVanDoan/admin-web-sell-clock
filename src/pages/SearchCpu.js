import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { getCpu } from "../api";
import HomeLayout from "../components/HomeLayout";

export default function SearchCpu() {
  const [cpu, setCpu] = useState([]);
  useEffect(() => {
    async function fetchLaptop() {
      const response = await getCpu();
      setCpu(response.data.data);
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
      title: "Mo ta",
      dataIndex: "value",
      key: "value",
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
          <h4>Mô tả: </h4>
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
        <Button type="primary">Hủy bỏ</Button>
      </div> */}
      <h2 style={{ textAlign: "center" }}>Danh sách cấu hình</h2>
      <Table columns={columns} dataSource={cpu} />
    </HomeLayout>
  );
}
