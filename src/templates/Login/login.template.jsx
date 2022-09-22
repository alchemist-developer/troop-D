import Box from "../../components/atoms/Box";
import { theme } from "../../styles/theme";
import LogoTropa from "../../components/atoms/Logo";
import Typography from "../../components/atoms/Typography";
import Input from "../../components/atoms/InputText";
import Button from "../../components/molecules/Button";
import IllustrateForm from "../../components/molecules/IllustrateForm";



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
            <Box
                bg={theme.colors.secondaryColor}
                width="857px"
                height="512px"
                
            >
                <Box width="50%" direction="column" align="center" justify="center" >

                    <Box direction="column" width="350px" gap="55px">
                        <LogoTropa width="259px" height="77.54px" />

                        <Box>

                            <Box direction="column" gap="10px">
                                <Typography fontSize="1.5em" fontWeight="bold" color={theme.colors.quartenaryColor} margin="0 0 20px 0" text={["Bem Vindo ao", <span style={{ color: theme.colors.primaryColor }} > painel</span>]} />
                                <Input type="email" placeholder="Digite seu e-mail" />
                                <Input type="password" placeholder="Digite sua senha" />

                                <Box>
                                    <Box>
                                        <Button href="/dashboard" familyFont={theme.font.family.secondary} color={theme.colors.secondaryColor} width="150px" height="40px" bg={theme.colors.tertiaryColor} text="Acessar" />
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