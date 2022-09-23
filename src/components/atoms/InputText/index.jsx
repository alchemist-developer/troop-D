import * as S from "./styled";


export default function Input (props) {
    return (
        <S.Input type={props.type} placeholder={props.placeholder} />
    );
}