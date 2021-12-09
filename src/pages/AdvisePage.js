import { Button, Col, Image, Row, Steps } from "antd";
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
  const [valueFive, setValueFive] = useState([]);
  const [result, setResult] = useState({});

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
    const response = await getketQua(
      `${valueOne} ^ ${valueTwo} ^ ${valueThree} ^ ${valueFour} ^ ${valueFive}`
    );
    setResult(response.data.laptop[0]);

    if (response.data.success) {
      setIsModalVisible(true);
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
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

      <Modal
        footer={null}
        title=""
        visible={isModalVisible}
        onCancel={handleCancel}
        width={900}
      >
        {result ? (
          <div>
            <h2>{result.name}</h2>
            <Row>
              <Col span={12}>
                <Image
                  width={400}
                  src={result.avatar}
                  style={{ textAlign: "center" }}
                />
              </Col>
              <Col span={12}>
                <div style={{ marginLeft: 20 }}>
                  <p>{result.price}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Thông tin cấu hình</p>
                  </div>
                  <div>
                    <table>
                      <tr>
                        <th>RAM</th>
                        <td>{result.RAM}</td>
                      </tr>
                      <tr>
                        <th>CPU</th>
                        <td>{result.CPU}</td>
                      </tr>
                      <tr>
                        <th>ROM</th>
                        <td>{result.ROM}</td>
                      </tr>
                      <tr>
                        <th>screen</th>
                        <td>{result.screen}</td>
                      </tr>
                      <tr>
                        <th>Card</th>
                        <td>{result.card}</td>
                      </tr>
                      <tr>
                        <th>Hệ điều hành</th>
                        <td>{result.os}</td>
                      </tr>
                      <tr>
                        <th>Kích thước</th>
                        <td>{result.size}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <h2>Không tìm được máy tính theo yêu cầu của bạn</h2>
        )}
        <div style={{ marginTop: 10 }}>
          <Button type="primary" style={{ marginLeft: 40 }}>
            Giải thích
          </Button>
        </div>
      </Modal>
    </HomeLayout>
  );
}
