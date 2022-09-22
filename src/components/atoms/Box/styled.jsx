import styled, { css } from "styled-components";

export const Box = styled.div`
  ${({
    bg,
    wrap,
    width,
    justify,
    align,
    height,
    direction,
    shadow,
    color,
    margin,
    padding,
}) => css`
    background-color: ${bg};
    width: ${width};
    height: ${height};
    display: flex;
    flex-wrap: ${wrap};
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    box-shadow: ${shadow};
    color: ${color};
    margin: ${margin};
    padding: ${padding};
  `}
`;