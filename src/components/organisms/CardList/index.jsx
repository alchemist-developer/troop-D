import { Obj } from "../../../services/fakeApi"
import { theme } from "../../../styles/theme"
import Box from "../../atoms/Box"
import Image from "next/image"
import Typography from "../../atoms/Typography"
import CardImage from "../../../../public/static/fakeApiImg.svg"
import calendar from "../../../../public/static/calendar.svg"
import * as S from "./styled"
import Link from "next/link"


export default function CardList() {
    return (

        <S.GridCard>
            {Obj.map((item => {
                return (
                    <Box position="relative" key={Obj.id} gap="5px" justify="center" align="center" direction="column" shadow={`0px 2px 5px 1px ${theme.colors.quartenaryColor}`} width="500px" height="228px" bg={theme.colors.secondaryColor} radius="8px" >

                        <S.Calendar>
                            <Image width="16px" src={calendar} alt="icone calendario" />
                            <p>2min atrás</p>
                        </S.Calendar>
                        <Image src={CardImage} alt="card image" />

                        <Box width="465px" direction="column" justify="flex-start" align="flex-start">
                            <Link href=""><a className="fading"><Typography color={theme.colors.senaryColor} text="Lorem impsum dolor sit amet consectetur adipisicing elit." fontSize="14px" fontWeight="700" lineHeight="26.11px" /></a></Link>
                            <Typography text="Lorem impsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem impsum dolor sit amet consectetur adipisicing elit." fontSize="12px" fontWeight="400" lineHeight="22.38px" />
                        </Box>
                    </Box>)
            }))}

        </S.GridCard>

    )
}