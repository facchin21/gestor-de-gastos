import styled from "styled-components";

interface TitleProps {
    fontSize?: string;
    colors? : string;
}

export const Title = styled.h1<TitleProps>`
    font-family : 'Caveat';
    font-weight: bold;
    text-align: center;
    font-size: ${props => props.fontSize || '3.2rem'};
    color : ${props => props.colors || "#000000"};
`