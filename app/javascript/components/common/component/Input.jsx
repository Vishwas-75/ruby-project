import React from 'react'
import styled from 'styled-components'
import { Label, Container } from '../styles/Common.styled'

const InputField = styled.input`
border: none;
outline: none;
background-color: #ffff;
color: #2e36ac;
`



function Input(props) {
  const { name, type, placeholder, onChange, className, value, error, children, label } = props
  return (
    <React.Fragment>
      <Container direction='column'>
        <Label htmlFor={name}>{label}</Label>
        <InputField
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          style={error && { border: 'solid 1px red' }}
        />
        {error && <p>{error}</p>}
      </Container>
    </React.Fragment>
  )
}

export default Input
