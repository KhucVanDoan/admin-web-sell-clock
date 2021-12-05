import React, { useState } from "react";
import HomeLayout from "../components/HomeLayout";
import { Select, Checkbox, Row, Col, Button, Table, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Option } = Select;

const dataSource = [
  {
    key: "1",
    vetrai: "Mike",
    vephai: 32,
  },
];

const columns = [
  {
    title: "Mã",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Vế trái",
    dataIndex: "vetrai",
    key: "vetrai",
  },
  {
    title: "Vế phải",
    dataIndex: "vephai",
    key: "vephai",
  },
  {
    title: "Hành động",
    key: "hanhdong",
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary">Sửa {record.key}</Button>
        <Button type="primary" danger>
          Xoá {record.key}
        </Button>
      </Space>
    ),
  },
];

export default function RulePage() {
  const [vetrai, setVetrai] = useState([]);
  const [statusVT, setStatusVT] = useState(false);
  const [rule, setRule] = useState("");
  const [vephai, setVephai] = useState([]);
  const [statusVP, setStatusVP] = useState(false);
  const [ruleVP, setRuleVP] = useState("");

  const handleChange = (value) => {
    setRule(value);
  };

  const handleChangeVP = (value) => {
    setRuleVP(value);
  };

  const onChangeVT = (e) => {
    setStatusVT(e.target.checked);
  };

  const onChangeVP = (e) => {
    setStatusVP(e.target.checked);
  };

  return (
    <HomeLayout>
      <Row>
        <Col span={12}>
          <h2>Chọn vế trái:</h2>
          <Select
            defaultValue="Luật A"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="Luật A">Luật A</Option>
            <Option value="Luật B">Luật B</Option>
            <Option value="Luật C">Luật C</Option>
          </Select>
          &nbsp;&nbsp;&nbsp;
          <Checkbox checked={statusVT} onChange={onChangeVT}>
            Phủ định
          </Checkbox>
          <Button
            type="primary"
            onClick={() => {
              let temp;
              if (!rule) temp = "Luật A";
              else temp = rule;
              if (statusVT) temp = `!${temp}`;
              setVetrai([...vetrai, temp]);
              setStatusVT(false);
            }}
          >
            Thêm
          </Button>
        </Col>
        <Col span={12}>
          <h2>Chọn vế phải:</h2>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChangeVP}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          &nbsp;&nbsp;&nbsp;
          <Checkbox checked={statusVP} onChange={onChangeVP}>
            Phủ định
          </Checkbox>
          <Button
            type="primary"
            onClick={() => {
              let temp;
              if (!ruleVP) temp = "Luật A";
              else temp = ruleVP;
              if (statusVP) temp = `!${temp}`;
              setVephai([...vephai, temp]);
              setStatusVP(false);
            }}
          >
            Thêm
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <h2>Luật:</h2>
          {vetrai.map((e) => e).join(" ^ ")}
          &nbsp;
          {vephai.length > 0 && <ArrowRightOutlined />}
          &nbsp;
          {vephai.map((e) => e).join(" ^ ")}
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col
          span={24}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button type="primary">Thêm mới</Button>
          <Button type="primary">Loại bỏ luật dư thừa</Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <h2 style={{ textAlign: "center" }}>TẬP LUẬT</h2>
        </Col>
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </HomeLayout>
  );
}
