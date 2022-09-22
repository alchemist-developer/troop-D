import styled from "styled-components";
import { theme } from "../../../styles/theme";


export const Input = styled.input`
    width: 313px;
    height: 44px;
    ::placeholder {
        color:  ${({ theme }) => theme.colors.quartenaryColor};
        font-family: ${({ theme }) => theme.font.family.default};
        fontSize: 12px;
        padding-left: 10px;
    }
    border: 1px solid ${theme.colors.quartenaryColor};
    border-radius: 4px;
    outline: none;
    transition: 0.3s;
    &:hover {
        transform: scale(1.01);
    }
`