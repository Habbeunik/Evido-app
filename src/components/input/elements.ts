import styled from "styled-components";
import theme from "../../config/theme";

export const Wrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  font-family: ${theme.font};
  color: ${theme.colors.dark};
`;

export const Input = styled.input`
  font-family: ${theme.font};
  width: 100%;
  padding: 20px;
  border-radius: 50px;
  border: 1px solid #cccccc96;
  outline: none;
  font-size: 20px;
  transition: all 300ms ease-out;
  color: #333;
  box-sizing: border-box;

  &:hover {
    border: 1px solid ${theme.colors.darkGrey};
  }

  &:focus {
    border: 1px solid ${theme.colors.dark};
  }
`;
