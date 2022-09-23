import Box from "../../components/atoms/Box";
import Header from "../../components/organisms/Header";
import LeftMenu from "../../components/organisms/LeftMenu"
import CardList from "../../components/organisms/CardList"

import { theme } from "../../styles/theme";
import * as S from "./dashboard.styled";


export default function DashboardTemplate() {

    return (

        <S.GridParent>

            <Box padding="60px 30px 0 30px" bg={theme.colors.secondaryColor}>
                <LeftMenu />
            </Box>

            <Box padding="60px 30px 0 30px" direction="column" bg={theme.colors.quinaryColor}>
                <Header />
                <CardList />
            </Box>



        </S.GridParent>

    );
}