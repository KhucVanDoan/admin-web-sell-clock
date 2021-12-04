import React from "react";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Apple", "Pear", "Orange"];

export default function CheckboxCustom() {
  const [checkedList, setCheckedList] = React.useState([]);

  const onChange = (list) => {
    setCheckedList(list);
  };

  return (
    <CheckboxGroup
      options={plainOptions}
      value={checkedList}
      onChange={onChange}
    />
  );
}
