import React, { useState } from "react";
import HomeLayout from "../../components/HomeLayout";
import { Button, Modal, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const history = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [id, setId] = useState(null);
  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "id",
      key: "key",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên Thương hiệu",
      dataIndex: "nameCategory",
      key: "nameCategory",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Ảnh",
      dataIndex: "images",
      key: "images",
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (params, a) => (
        <Space size="middle">
          <a onClick={() => history(`/products/detail/${a?.id}`)}>
            <EyeOutlined />
          </a>
          <a onClick={() => history(`/products/edit/${a?.id}`)}>
            <EditOutlined />
          </a>
          <a
            onClick={() => {
              setIsOpenModal(true);
              setId(a?.id);
            }}
          >
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
      nameCategory: `thuowng hiệu ${i}`,
      price: i,
      images: "i",
    });
  }
  const handleOk = () => {
    setIsOpenModal(false);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };
  return (
    <HomeLayout>
      <h2 style={{ textAlign: "center" }}>Danh sách sản phẩm</h2>
      <Button
        type="primary"
        style={{ marginLeft: "90%" }}
        onClick={() => history("/products/create")}
      >
        Thêm mới
      </Button>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 500 }}
      />
      <Modal
        title="Xóa Thương hiệu"
        visible={isOpenModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h2>Bạn có chắc chắn muốn xóa không?</h2>
      </Modal>
    </HomeLayout>
  );
};

export default Product;
