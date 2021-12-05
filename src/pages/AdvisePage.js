import { Button, message, Steps } from "antd";
import React from "react";
import CheckboxCustom from "../components/CheckboxCustom";
import HomeLayout from "../components/HomeLayout";
import RadioCustom from "../components/RadioCustom";

const { Step } = Steps;

const demo = [
  { value: "Văn phòng", key: 1 },
  { value: "Chơi game", key: 2 },
  { value: "Đồ hoạ - kỹ thuật", key: 3 },
];
const demo2 = [
  { value: "Asus", key: 1 },
  { value: "Dell", key: 2 },
  { value: "Apple", key: 3 },
];
const demo3 = [
  { value: "13 inches", key: 1 },
  { value: "14 inches", key: 2 },
  { value: "16 inches", key: 3 },
];
const demo4 = [
  { value: "5 triệu", key: 1 },
  { value: "10 triệu", key: 2 },
  { value: "20 triệu", key: 3 },
];

const steps = [
  {
    title: "Mục đích",
    content: <RadioCustom array={demo} />,
  },
  {
    title: "Hãng sản xuất",
    content: <RadioCustom array={demo2} />,
  },
  {
    title: "Kích thước màn hình",
    content: <RadioCustom array={demo3} />,
  },
  {
    title: "Giá tiền",
    content: <RadioCustom array={demo4} />,
  },
  {
    title: "Tính năng khác",
    content: <CheckboxCustom />,
  },
];

export default function AdvisePage() {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
