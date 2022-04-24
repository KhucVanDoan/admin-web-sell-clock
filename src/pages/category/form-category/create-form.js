import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../../components/HomeLayout";

const CreateCategory = () => {
  const [form] = Form.useForm();
  const history = useNavigate();
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "Mục này bắt buộc phải nhập",
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <HomeLayout>
      <h2 style={{ marginBottom: "50px" }}>Thêm mới Thương hiệu</h2>
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
              label="Mã thương hiệu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col flex={1}>
            <Form.Item
              name="name"
              label="Tên thương hiệu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
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
          <Button htmlType="button" onClick={() => history("/category")}>
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

export default CreateCategory;
