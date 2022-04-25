import { AutoComplete, Button, Col, Form, Input, Row, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../../components/HomeLayout";

const EditProduct = () => {
  const [form] = Form.useForm();
  const history = useNavigate();
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "Mục này bắt buộc phải nhập",
  };
  const options = [
    { value: "Thuỵ sỹ" },
    { value: "Rolex" },
    { value: "Casio" },
  ];
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <HomeLayout>
      <h2 style={{ marginBottom: "50px" }}>Thêm mới sản phẩm</h2>
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row>
          <Col span={12}>
            <Form.Item
              name="code"
              label="Mã sản phẩm"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="nameCategory"
              label="Tên thương hiệu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <AutoComplete
                style={{ width: 360 }}
                options={options}
                placeholder="chọn thương hiệu"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Giá"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="type"
              label="loại"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="quantity"
              label="Số lượng"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="images"
              label="Ảnh"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                beforeUpload={() => false}
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="description" label="Mô tả">
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          style={{ marginLeft: "60%" }}
        >
          <Button htmlType="button" onClick={() => history("/products")}>
            Quay lại
          </Button>
          <Button
            htmlType="button"
            onClick={onReset}
            style={{ marginLeft: "10px" }}
          >
            Huỷ
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: "10px" }}
          >
            Tạo mới
          </Button>
        </Form.Item>
      </Form>
    </HomeLayout>
  );
};

export default EditProduct;
