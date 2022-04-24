import { Button, Space, Table } from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import HomeLayout from "../../components/HomeLayout";
import { useNavigate } from "react-router-dom";
export default function Category() {
  const history = useNavigate();
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "key",
    },
    {
      title: "Tên thương hiệu",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (params, a) => (
        <Space size="middle">
          <a onClick={() => history(`/category/detail/${a?.id}`)}>
            <EyeOutlined />
          </a>
          <a onClick={() => history(`/category/edit/${a?.id}`)}>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];
  const dataSource = [];
  for (let i = 0; i < 20; i++) {
    dataSource.push({
      key: i,
      id: i,
      name: "test",
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <HomeLayout>
      <h2 style={{ textAlign: "center" }}>Danh sách Thương hiệu</h2>
      <Button
        type="primary"
        style={{ marginLeft: "90%" }}
        onClick={() => history("/category/create")}
      >
        Thêm mới
      </Button>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 240 }}
      />
    </HomeLayout>
  );
}
