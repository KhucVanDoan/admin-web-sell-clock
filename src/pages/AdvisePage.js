import { Button, message, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { getOneCauHinh } from "../api";
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

  console.log(valueOne, valueTwo, valueThree, valueFour, valueFive);

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
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Hoàn thành
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Quay lại
          </Button>
        )}
      </div>
    </HomeLayout>
  );
}
