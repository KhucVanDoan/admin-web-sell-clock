import React from "react";
import { Radio, Space } from "antd";

export default function RadioCustom(props) {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
    props.setValue(e.target.value);
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
