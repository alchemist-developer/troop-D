import * as S from "./styled";

const Box = ({
    bg,
    wrap,
    width,
    justify,
    align,
    height,
    direction,
    shadow,
    color,
    margin,
    padding,
    children,
    position,
    radius,
    gap,
}) => {
    return (
        <S.Box
            padding={padding}
            margin={margin}
            color={color}
            bg={bg}
            width={width}
            height={height}
            justify={justify}
            align={align}
            direction={direction}
            shadow={shadow}
            flex-wrap={wrap}
            position={position}
            gap={gap}
            radius={radius}
        >
            {children}
        </S.Box>
    );
};

export default Box;