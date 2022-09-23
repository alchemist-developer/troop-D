/* eslint-disable react/jsx-key */
import Box from "../../components/atoms/Box";
import { theme } from "../../styles/theme";
import LogoTropa from "../../components/atoms/LogoTropa";
import Typography from "../../components/atoms/Typography";
import Input from "../../components/atoms/InputText";
import Button from "../../components/molecules/Button";
import IllustrateForm from "../../components/molecules/IllustrateForm";
import Head from "next/head";



export default function LoginTemplate() {
    return (

        <Box
            bg={theme.colors.primaryColor}
            width="100%"
            height="100vh"
            justify="center"
            align="center"
            direction="column"
        >
            <Head>
                <title>Tropa.Digital | Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box
                bg={theme.colors.secondaryColor}
                width="857px"
                height="512px"
            >
                <Box width="50%" direction="column" align="center" justify="center" >

                    <Box direction="column" width="350px" gap="60px">

                        <LogoTropa width="259px" height="77.54px" />

                        <Box>

                            <Box direction="column" gap="10px">

                                <Typography fontSize="1.5em" fontWeight="bold" color={theme.colors.quartenaryColor} margin="0 0 20px 0" text={["Bem Vindo ao", <span style={{ color: theme.colors.primaryColor }} > painel</span>]} />
                                <Input type="email" placeholder="Digite seu e-mail" />
                                <Input type="password" placeholder="Digite sua senha" />

                                <Box>
                                    <Box>
                                        <Button type="submit" onClick={() => { }} href="/dashboard" justify="center" familyFont={theme.font.family.secondary} color={theme.colors.secondaryColor} width="150px" height="40px" bg={theme.colors.tertiaryColor} text="Acessar" />
                                    </Box>
                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Box>

                <Box width="50%">
                    <IllustrateForm />
                </Box>


            </Box>
        </Box>
    );
}