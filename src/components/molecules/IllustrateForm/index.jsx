import Image from "next/image"
import Box from "../../atoms/Box"
import BgForm from "../../../../public/static/bgForm.svg"
import Illustrate from "../../../../public/static/Illustrate.svg"
import * as S from "./styled"

export default function IllustrateForm() {
    return (
        <S.Parent>
            <Image src={BgForm} alt="background form" />
            <S.Child>
             <Image src={Illustrate} alt="ilustração form, notebook" />
            </S.Child>
         </S.Parent>
    )
}