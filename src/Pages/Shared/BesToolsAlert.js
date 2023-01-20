import { Alert } from "flowbite-react";
import React from "react";

const BesToolsAlert = ({ info }) => {
  const { type, message, show } = info;
  return show ? (
    <div className="my-2 bestools-alert">
      <Alert
        color="success"
        onDismiss={function onDismiss() {
          return alert("Alert dismissed!");
        }}
      >
        <span> {message} </span>
      </Alert>
    </div>
  ) : (
    ""
  );
};

export default BesToolsAlert;
