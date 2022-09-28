import Box from "../../atoms/Box";
import { theme } from "../../../styles/theme";
import LogoTropa from "../../atoms/LogoTropa";
import ButtonsList from "../ButtonsList";

export default function LeftMenu() {
    return (
        <Box>
            <aside>
                <Box direction="column" gap="50px">
                    <LogoTropa />
                    <Box direction="column">
                        <ButtonsList />
                    </Box>
                </Box>
            </aside>
        </Box>
    )
}