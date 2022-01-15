import { Button, Col, Image, Row, Steps, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import { getketQua, getOneCauHinh } from "../api";
import CheckboxCustom from "../components/CheckboxCustom";
import HomeLayout from "../components/HomeLayout";
import RadioCustom from "../components/RadioCustom";

const { Step } = Steps;
export default function AdvisePage() {
  const [current, setCurrent] = useState(0);
  const [stepOne, setStepOne] = useState([]);
  const [stepTwo, setStepTwo] = useState([]);
  const [stepThree, setStepThree] = useState([]);
  const [stepFour, setStepFour] = useState([]);
  const [stepFive, setStepFive] = useState([]);
  const [valueOne, setValueOne] = useState();
  const [valueTwo, setValueTwo] = useState();
  const [valueThree, setValueThree] = useState();
  const [valueFour, setValueFour] = useState();
  const [valueFive, setValueFive] = useState();
  const [result, setResult] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const cauhinh1 = await getOneCauHinh("MD");
      const cauhinh2 = await getOneCauHinh("H");
      const cauhinh3 = await getOneCauHinh("MH");
      const cauhinh4 = await getOneCauHinh("G");
      const cauhinh5 = await getOneCauHinh("K");
      setStepOne(cauhinh1.data.data);
      setStepTwo(cauhinh2.data.data);
      setStepThree(cauhinh3.data.data);
      setStepFour(cauhinh4.data.data);
      setStepFive(cauhinh5.data.data);
    };
    fetchData();
  }, []);
  const handleClick = async () => {
    const body = [valueOne, valueTwo, valueThree, valueFour, valueFive]
      .filter((e) => e !== null && e !== undefined && e !== "")
      .join(" ^ ");
    const response = await getketQua(body);
    console.log(body);
    setResult(response.data.laptop);
    setData(response.data.data);

    if (response.data.success) {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancelGT = () => {
    setIsVisible(false);
  };

  const steps = [
    {
      title: "Mục đích",
      content: <RadioCustom setValue={setValueOne} array={stepOne} />,
    },
    {
      title: "Hãng sản xuất",
      content: <RadioCustom setValue={setValueTwo} array={stepTwo} />,
    },
    {
      title: "Kích thước màn hình",
      content: <RadioCustom setValue={setValueThree} array={stepThree} />,
    },
    {
      title: "Giá tiền",
      content: <RadioCustom setValue={setValueFour} array={stepFour} />,
    },
    {
      title: "Tính năng khác",
      content: <CheckboxCustom setValue={setValueFive} array={stepFive} />,
    },
  ];

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "r",
      dataIndex: "r",
      key: "r",
    },
    {
      title: "TG",
      dataIndex: "TG",
      key: "TG",
    },
    {
      title: "SAT",
      key: "SAT",
      dataIndex: "SAT",
    },
  ];

  // Bắt đầu xử lý giải thích suy diễn tiễn
  let r = "";
  let TG = `${valueOne},${valueTwo},${valueThree},${valueFour},${
    valueFive ? valueFive : ""
  }`.replaceAll(" ^ ", ",");
  const dataGT = [];
  const SAT = data.map((e) => e.key);

  for (let i = 0; i <= data.length; i++) {
    if (i > 0) {
      SAT.shift();
      r = data[i - 1].key;
    }

    if (i > 0 && TG.split(",").indexOf(data[i - 1].vephai) === -1) {
      TG = `${TG}${data[i - 1].vephai},`.replace(" ^ ", ",");
    }

    dataGT.push({
      index: i,
      r,
      TG,
      SAT: SAT.join(","),
    });
  }
  // Kết thúc xử lý giải thích suy diễn tiễn

  return (
    <HomeLayout>
      <h1 style={{ textAlign: "center", paddingBottom: 30 }}>
        TƯ VẤN CHỌN MUA LAPTOP
      </h1>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action" style={{ textAlign: "center" }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Tiếp theo
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={handleClick}>
            Hoàn thành
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Quay lại
          </Button>
        )}
      </div>

      {/* Modal result */}
      <Modal
        footer={null}
        title=""
        visible={isModalVisible}
        onCancel={handleCancel}
        width={900}
      >
        <div style={{ marginBottom: 10 }}>
          <Button
            type="primary"
            style={{ marginLeft: 40 }}
            onClick={() => setIsVisible(true)}
          >
            Giải thích
          </Button>
        </div>
        {result.length ? (
          result.map((e) => (
            <div>
              <h2>{e.name}</h2>
              <Row>
                <Col span={12}>
                  <Image
                    width={400}
                    src={e.avatar}
                    style={{ textAlign: "center" }}
                  />
                </Col>
                <Col span={12}>
                  <div style={{ marginLeft: 20 }}>
                    <p style={{ color: "red", fontWeight: "bold" }}>
                      {e.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontWeight: "bold" }}>Thông tin cấu hình</p>
                    </div>
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>RAM</td>
                            <td>{e.RAM}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>CPU</td>
                            <td>{e.CPU}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>ROM</td>
                            <td>{e.ROM}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>screen</td>
                            <td>{e.screen}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Card</td>
                            <td>{e.card}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Hệ điều hành</td>
                            <td>{e.os}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Kích thước</td>
                            <td>{e.size}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <h2 style={{ textAlign: "center" }}>
            Không tìm được máy tính theo yêu cầu của bạn
          </h2>
        )}
      </Modal>

      {/* Modal giải thích */}
      <Modal
        footer={null}
        title=""
        visible={isVisible}
        onCancel={handleCancelGT}
        width={1200}
      >
        <h4 style={{ textAlign: "center", textTransform: "uppercase" }}>
          Dựa vào những thông tin bạn vừa chọn, ta có bảng giải thích bằng thuật
          toán suy diễn tiến như sau
        </h4>
        <Table columns={columns} dataSource={dataGT} pagination={false} />
        <h2 style={{ textAlign: "center" }}>
          Bạn đã tìm được {result.length} cái laptop phù hợp
        </h2>
      </Modal>
    </HomeLayout>
  );
}
