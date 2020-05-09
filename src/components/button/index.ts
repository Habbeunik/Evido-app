import styled from "styled-components";
import theme from "../../config/theme";

export const Button = styled.button`
  font-family: ${theme.font};
  padding: 20px 30px;
  border-radius: 30px;
  border: 2px solid ${theme.colors.primary};
  outline: none;
  font-size: 15px;
  font-weight: 700;
  color: white;
  background: ${theme.colors.primaryLight};
  cursor: pointer;
`;

export default Button;
