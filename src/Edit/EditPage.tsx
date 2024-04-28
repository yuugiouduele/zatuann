import React from "react";
import CustomButton from "./CustomButton";
import { useLocation } from "react-router-dom";

const EditPage = () => {
  const location = useLocation();

  const onClick = () => {
    alert("保存しました");
  };

  return (
    <div>
      <div>編集画面</div>
      <div>{location.state.id}</div>
      <div>{location.state.text}</div>
      <CustomButton width="100px" onClick={onClick}>
        保存
      </CustomButton>
    </div>
  );
};

export default EditPage;