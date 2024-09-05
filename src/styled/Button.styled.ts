import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
    primary?: boolean;
  }

//   Estilos de Botones

export const Button = styled(Link)<ButtonProps>`
    background-color: #38A37F;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    font-family : 'Inter';
    cursor: pointer;
    transition: all 800ms ease;

    &:hover {
        background-color: #5a6268;
    }
`

export const Buttons = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family : 'Inter';
    font-size: 16px;
    padding: 10px 20px;
    gap: 8px;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: #38A37F;
    cursor: pointer;
    transition: all 800ms ease;

    &:hover {
        background-color: #5a6268;
    }
`

export const ButtonSeccion = styled.button`
    font-family: "Inter";
    line-height: 1.75rem;
    font-size: 1.125rem;
    font-weight: 700;
    width: 100%;
    display: flex;
    justify-content : center;
    align-items: center;
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