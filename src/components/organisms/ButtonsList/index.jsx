import Box from "../../atoms/Box";
import Button from "../../molecules/Button";
import { theme } from "../../../styles/theme";


export default function ButtonsList() {
    return (

        <Box direction="column" justify="center" align="center">
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "15px" }}>
                <li><Button align="start" width="211px" height="50px" text="Início" color={theme.colors.senaryColor} bg={theme.colors.quinaryColor} /></li>
                <li><Button width="211px" height="50px" text="Relatórios" color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
                <li><Button width="211px" height="50px" text="Gráficos" color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
                <li><Button width="211px" height="50px" text="Entradas" color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
                <li><Button width="211px" height="50px" text="Saídas" color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
                <li><Button width="211px" height="50px" text="Admin" color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
            </ul>
        </Box>
    )
}