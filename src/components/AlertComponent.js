import React from "react";
import Alert from "react-bootstrap/Alert";

function AlertComponent() {
  return (
    <Alert variant="danger">
      ERROR : 404 products not found! Please try again later.
    </Alert>
  );
}

export default AlertComponent;
