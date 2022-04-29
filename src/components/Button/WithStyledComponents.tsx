import styled, { css } from "styled-components";

type ButtonProps = {
  size?: "large" | "small";
};

const Button = styled.button<ButtonProps>`
  padding: 12px 24px;
  background: #8257e5;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  border-radius: 8px;
  border: none;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  ${props =>
    props.size === "small" &&
    css`
      font-size: 14px;
      padding: 12px 14px;
    `}

  ${props =>
    props.size === "large" &&
    css`
      font-size: 18px;
      padding: 14px 24px;
    `}
`;

const Box = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  text-align: center;
  background: #202024;
  border-radius: 6px;

  span {
    font-weight: bold;
    font-size: 20px;
  }
`;

export function ButtonWithStyled() {
  return (
    <Box>
      <span>With Styled component</span>
      <Button>Hello World</Button>
    </Box>
  );
}
