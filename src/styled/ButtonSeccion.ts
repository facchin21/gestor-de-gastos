import styled from "styled-components";

export const ButtonSeccion = styled.button`
    font-family: "Inter";
    line-height: 1.75rem;
    font-size: 1.125rem;
    font-weight: 700;
    width: 100%;
    padding: 1rem 0;
    margin-top: 1rem;
    border-radius: 0.5rem;
    color: rgb(56 163 127);
    background-color : rgba(225 236 200);
    transition-property: all;
    transition-duration: 700ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        background-color: rgb(255 255 255);
    }
`