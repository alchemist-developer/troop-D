/* eslint-disable react/jsx-key */
import { theme } from "../../../styles/theme";
import Box from "../../atoms/Box";
import Typography from "../../atoms/Typography";
import * as S from "./styled";

export default function Header() {
    return (
        <>
            <Box height="104px" direction="column">
                <header>
                    <Typography spacing="100px" fontSize="1.6em" text={["Olá, ", <strong>usuário</strong>]} color={theme.colors.quartenaryColor} />
                    <S.Divisor />
                </header>
            </Box>
        </>
    )
}