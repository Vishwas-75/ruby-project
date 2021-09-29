import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 5%;
  left: 5%;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  z-index: 9001;
  cursor: pointer;
  transition: opacity 0.25s;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const Container = styled.div`
  border-radius: 8px;
  transition: opacity 0.35s;
  padding: 1rem 2.5rem;
  /* Color the border and text with theme.main */
  background-color: ${(props) => props.theme.bgcolor};
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

const Text = styled.p`
  margin-bottom: 0px;
  font-size: 16px;
`;

// Define what main theme will look like
const getTheme = (theme) => {
  if (theme === "info") {
    return { color: "#0c5460", bgcolor: "#d1ecf1", borderColor: "#bee5eb" };
  } else if (theme === "failure") {
    return { color: "#721c24", bgcolor: "#f8d7da", borderColor: "#f5c6cb" };
  } else {
    return { color: "#155724", bgcolor: "#d4edda", borderColor: "#c3e6cb" };
  }
};

function Alert({ children, theme, show }) {
  return (
    <Wrapper show={show}>
      <ThemeProvider theme={getTheme(theme)}>
        <Container>
          <Text>{children}</Text>
        </Container>
      </ThemeProvider>
    </Wrapper>
  );
}

export default Alert;
