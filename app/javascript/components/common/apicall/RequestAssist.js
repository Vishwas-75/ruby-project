import React, { useEffect, useState } from "react";
import axios from "axios";

import Alert from "../component/Alert";
import { isEmpty } from "../../../util/utilFunction";

let setRequestAssistProps;

const defultOptionalProps = {
  message: "Loading",
  messageShowTime: 5000,
  onSuccess: () => {},
  onError: () => {},
};

function useRequestProps() {
  const [requestProps, setRequestProps] = useState({});

  setRequestAssistProps = setRequestProps;

  return requestProps;
}

async function makeRequest(url, method, payload, optionalProps = {}) {
  let optional = { ...defultOptionalProps, ...optionalProps };
  setRequestAssistProps({
    loading: true,
    message: optional.message,
    messageShowTime: optional.messageShowTime,
  });
  const CSRF_Token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

  try {
    const result = await axios[method.toLowerCase()](url, payload, {
      headers: {
        "content-type": optional.contentType,
        "X-CSRF-Token": CSRF_Token,
      },
    });

    const response = result.data;

    if (response.success) {
      setRequestAssistProps({
        message: response.message,
        messageType: "success",
        loading: false,
        autoClose: true,
        messageShowTime: optional.messageShowTime,
      });
      optional.onSuccess(response.data.data);
      return response.data.data;
    } else {
      setRequestAssistProps({
        message: response.message,
        messageType: "failure",
        loading: false,
        autoClose: true,
        messageShowTime: optional.messageShowTime,
      });
      optional.onError(response.message);
    }
  } catch (e) {
    console.log(e);
    setRequestAssistProps({
      message: "Failed",
      messageType: "failure",
      loading: false,
      autoClose: true,
      messageShowTime: optional.messageShowTime,
    });
    optional.onError(e);
    return null;
  }
}

function RequestAssist() {
  const [show, setShow] = useState(loading || !isEmpty(message));
  const [timeoutId, setTimeoutId] = useState(-1);

  const props = useRequestProps();

  const defaultProps = {
    massage: "Loadiing",
    messageType: "info",
    autoClose: true,
    loading: false,
  };

  const { messageType, autoClose, loading, message } = {
    ...defaultProps,
    ...props,
  };

  useEffect(() => {
    clearTimeout(timeoutId);
    setShow(!isEmpty(message) || loading);

    if (autoClose && !loading) {
      const id = setTimeout(() => {
        setShow(false);
      }, props.messageShowTime);

      setTimeoutId(id);
    }
  }, [loading, !isEmpty(message)]);

  return (
    <Alert theme={messageType} show={show}>
      {message}
    </Alert>
  );
}

export { RequestAssist as default, makeRequest };
