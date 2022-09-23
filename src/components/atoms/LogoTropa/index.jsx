import Image from "next/image"
import Logo from "../../../../public/static/Logo.svg"

export default function LogoTropa(props) {
    return (
        <a><Image src={Logo} alt="Logo Tropa Digital" width={props.width} height={props.height} /></a>
    );
}