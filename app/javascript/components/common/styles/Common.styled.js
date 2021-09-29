import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  flex: 1;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  padding: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Rowcontainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: ${({ aItems }) => aItems};
  justify-content: ${({ jContent }) => jContent};
`;
export const Colcontainer = styled(Rowcontainer)`
  flex-direction: column;
`;
export const Title = styled.p`
  color: blueviolet;
  margin-bottom: 0.4rem;
  font-size: ${({ size }) => size};
  font-weight: 400;
  a {
    text-decoration: none;
  }
`;
export const W3Text = styled.p`
  margin-bottom: 0px;
  font-size: ${({ size }) => size};
  font-weight: 300;
  color: ${({ color }) => color};

  ${(props) =>
    props.primary &&
    css`
      color: #000000;
    `};
`;
export const W4Text = styled(W3Text)`
  font-weight: 400;
`;
export const W5Text = styled(W3Text)`
  font-weight: 500;
`;
export const W8Text = styled(W3Text)`
  font-weight: 800;
`;

export const SubText = styled(Title)`
  font-weight: 300;
  margin-bottom: ${({ mB }) => (mB ? mB : "0px")};
`;
export const Label = styled.label`
  font-family: "Poppins", Arial, sans-serif;
  color: black;
  font-weight: ${({ fWeight }) => (fWeight ? fWeight : "300")};
  font-size: ${({ size }) => size};
`;
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: ${({ mB }) => (mB ? mB : "0px")};
  padding: ${({ tb }) => (tb ? tb : "0")} ${({ lr }) => (lr ? lr : "0")};
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ tb }) => (tb ? tb : "0")} ${({ lr }) => (lr ? lr : "0")};
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #494ca2;
  color: #494ca2;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
`;
