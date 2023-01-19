import { Alert } from "flowbite-react";
import React from "react";

const BesToolsAlert = ({ type, message }) => {
  return (
    <Alert
      color={{ type }}
      onDismiss={function onDismiss() {
        return alert("Alert dismissed!");
      }}
    >
      <span> {message} </span>
    </Alert>
  );
};

export default BesToolsAlert;
