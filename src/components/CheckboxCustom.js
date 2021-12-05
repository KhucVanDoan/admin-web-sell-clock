import React from "react";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

export default function CheckboxCustom(props) {
  const [checkedList, setCheckedList] = React.useState([]);

  const onChange = (list) => {
    setCheckedList(list);
    const data = {};
    props.array.forEach((e) => {
      data[e.value] = e.key;
    });
    console.log(list.map((e) => data[e]));
    props.setValue(list.map((e) => data[e]));
  };

  return (
    <CheckboxGroup
      options={props.array.map((e) => e.value)}
      value={checkedList}
      onChange={onChange}
    />
  );
}
