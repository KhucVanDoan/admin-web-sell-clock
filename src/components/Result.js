import { Button, Col, Image, Row, Table } from "antd";
import React from "react";

export default function Result() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  return (
    <div>
      <h2>Tên laptop</h2>
      <Row>
        <Col span={12}>
          <Image
            width={400}
            src="https://topthuthuat.com/wp/wp-content/uploads/2020/05/ban-phim-laptop-bi-loi.jpg"
          />
        </Col>
        <Col span={12}>
          <div style={{ marginLeft: 20 }}>
            <p>Giá</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Thông tin cấu hình</p>
              <a>Xem chi tiết</a>
            </div>
            <Table columns={columns} dataSource={data} />
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: 10 }}>
        <Button type="primary" style={{ marginLeft: 40 }}>
          Giải thích
        </Button>
        <Button type="primary" style={{ marginLeft: 40 }}>
          Làm Lại
        </Button>
      </div>
    </div>
  );
}
