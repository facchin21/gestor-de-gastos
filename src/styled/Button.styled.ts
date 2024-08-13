import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
    primary?: boolean;
  }

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