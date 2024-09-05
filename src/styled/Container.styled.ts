import styled from "styled-components";

// Estilos generales del sistema!

export const Container = styled.div `
    background-color: #38A37F;
    padding: 2rem 6rem;
    border-radius: 2rem;
    width: 100%;
`

export const Error = styled.p`
    font-family: 'Inter';
    font-size : 1rem;
    color : red;
`

interface TitleProps {
    fontSize?: string;
    colors? : string;
}

export const Title = styled.h1<TitleProps>`
    font-family : 'Caveat';
    font-weight: bold;
    text-align: center;
    font-size: ${props => props.fontSize || '3.3rem'};
    color : ${props => props.colors || "#000000"};
`