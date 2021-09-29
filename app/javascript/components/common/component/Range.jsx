import React from "react";
import { Label, Container, Rowcontainer } from "../styles/Common.styled";
import styled from "styled-components";

const Score = styled.span`
  color: blueviolet;
  font-size: 16px;
  font-weight: 400;
`;
function Range(props) {
  const { name, min, max, step, onChange, className, value, error, label } = props;
  const range = value ? value : 0;
  return (
    <React.Fragment>
      <Container direction="column">
        <Rowcontainer jContent="space-between">
          <Label htmlFor={name} size="16px">
            {label}
          </Label>
          <Score>{range / 10} </Score>
        </Rowcontainer>
        <Rowcontainer>
          <input
            type="range"
            id={name}
            min={min}
            max={max}
            name={name}
            step={step}
            onChange={onChange}
            value={range}
            className={className}
          />
        </Rowcontainer>
        <Rowcontainer>{error && <p>{error}</p>}</Rowcontainer>
      </Container>
    </React.Fragment>
  );
}

export default Range;
