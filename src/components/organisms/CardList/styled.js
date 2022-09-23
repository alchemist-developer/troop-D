import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const GridCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(485px, 1fr)); 
    gap: 20px;
`
export const Calendar = styled.div`
    position: absolute;
    top: 20px;
    right: 25px;
    z-index: 1;
    border-radius: 3px;
    padding: 5px 15px;
    color : ${theme.colors.secondaryColor};
    background-color: rgba(64, 64, 64, 0.555);
    display: flex;
    gap: 10px;
`