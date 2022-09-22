import * as S from "./styled";

export default function Button({ bg, margin, padding, width, height, shadow, color, familyFont, href, ...props }) {
    return (

        <S.Button bg={bg} margin={margin} padding={padding} width={width} height={height} shadow={shadow} color={color} familyFont={familyFont} href={href}> {props.text}</S.Button>

    );
}