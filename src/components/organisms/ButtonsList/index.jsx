import Box from "../../atoms/Box";
import Button from "../../molecules/Button";
import { theme } from "../../../styles/theme";
import ContatosFrame from '../../../../public/static/ContatosFrame.svg'
import RelatorioFrame from '../../../../public/static/RelatorioFrame.svg'
import InicioFrame from '../../../../public/static/InicioFrame.svg'
import Image from "next/image";


export default function ButtonsList() {
    return (

        <Box direction="column" justify="center" align="center">
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "15px" }}>
                <li><Button href="/" padding="20px" width="211px" height="50px" text={[<Image src={InicioFrame} key="1" alt="frame" />, "⠀Início"]} color={theme.colors.senaryColor} bg={theme.colors.quinaryColor} /></li>
                <li><Button padding="20px" width="211px" height="50px" text={[<Image src={RelatorioFrame} key="2" alt="frame" />, "⠀Relatórios"]} color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
                <li><Button padding="20px" width="211px" height="50px" text={[<Image src={ContatosFrame} key="3" alt="frame" />, "⠀Contatos"]} color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
                <li><Button padding="20px" width="211px" height="50px" text={[<Image src={ContatosFrame} key="4" alt="frame" />, "⠀Contatos"]} color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
                <li><Button padding="20px" width="211px" height="50px" text={[<Image src={ContatosFrame} key="5" alt="frame" />, "⠀Contatos"]} color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
                <li><Button padding="20px" width="211px" height="50px" text={[<Image src={ContatosFrame} key="6" alt="frame" />, "⠀Contatos"]} color={theme.colors.quinaryColor} bg={theme.colors.tertiaryColor} /></li>
            </ul>
        </Box>
    )
}