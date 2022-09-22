import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const Button = styled.a`
  ${({ bg, margin, padding, width, height, shadow, color, familyFont }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
    border-radius: 4px;
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
    trasition: 0.3s;
    &:active {
     color: ${theme.colors.primaryColor};
    }
  `}
`;