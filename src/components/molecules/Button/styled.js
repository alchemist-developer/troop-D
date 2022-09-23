import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const Button = styled.a`
  ${({ align, bg, margin, padding, width, height, shadow, color, familyFont, justify }) => css`
    display: flex;
    flex-direction: row;
    justify-content: ${justify};
    align-items: center;
    width: ${width};
    height: ${height};
    border-radius: 5px;
    color: ${color};
    background-color: ${bg};
    margin: ${margin};
    padding: ${padding};
    box-shadow: ${shadow};
    font-family: ${familyFont};
    cursor: pointer;
    border: 0;
    outline: 0;
    text-decoration: none;
    text-align: ${align};
    box-shadow: 2px 2px 2px 2px ${theme.colors.quinaryColor};
    transition: 0.5s;
    &:active {
     color: ${theme.colors.primaryColor};
    }
    &:hover {
      background-color: ${theme.colors.secondaryColor};
      color: ${theme.colors.primaryColor};
      box-shadow: 2px 2px 2px 2px ${theme.colors.quinaryColor};
    }
  `}
`;