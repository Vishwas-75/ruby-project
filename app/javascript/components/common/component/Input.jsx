import React, { useState, useImperativeHandle } from "react";
import styled from "styled-components";
import { isEmpty } from "../../../util/utilFunction";
import { Label, Container, W3Text } from "../styles/Common.styled";

const InputField = styled.input`
  border: none;
  outline: none;
  background-color: #ffff;
  color: #2e36ac;
`;
const Error = styled(W3Text)`
  color: red;
  font-size: 12px;
`;

function Input({ name, type, placeholder, onChange, className, value, label },ref) {
  const [error, setError] = useState({});

  const handleBlur = () => {
    if (isEmpty(value)) {
      setError({ ...error, message: `${label} is required` });
    }
  };

  const handleInput = () => {
    setError({});
  };

  useImperativeHandle(ref, () => ({
    handleSubmit() {
      if (isEmpty(value)) {
        setError({ ...error, message: `${label} is required` });
      }
    },
  }));

  return (
    <React.Fragment>
      <Container direction="column">
        <Label htmlFor={name} size="16px">
          {label}
        </Label>
        <InputField
          onInput={handleInput}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={handleBlur}
          value={value}
          className={className}
          ref={ref}
          style={error.message && { border: "solid 1px red" }}
        />
        {!!error && <Error>{error.message}</Error>}
      </Container>
    </React.Fragment>
  );
}

export default React.forwardRef(Input);
