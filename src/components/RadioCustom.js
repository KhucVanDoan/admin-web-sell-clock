import React from "react";
import { Radio, Space } from "antd";

export default function RadioCustom(props) {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="horizontal">
        {props.array.map((e) => (
          <Radio value={e.key}>{e.value}</Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}
