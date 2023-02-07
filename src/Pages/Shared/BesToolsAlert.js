import { Alert } from "flowbite-react";
import React from "react";

const BesToolsAlert = ({ info, setAlertInfo }) => {
  const onDismiss = () => {
    setAlertInfo({});
  };

  const { type, message, show } = info;
  return show ? (
    <div className="my-2 w-full bestools-alert">
      <Alert color={type} onDismiss={onDismiss}>
        <span> {message} </span>
      </Alert>
    </div>
  ) : (
    ""
  );
};

export default BesToolsAlert;
