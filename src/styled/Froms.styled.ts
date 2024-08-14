import styled from "styled-components";

export const Label = styled.label`
    font-family : "Inter";
    font-size: 1.1rem;
    color : #E1ECC8;
`
export const Input = styled.input`
    background-color: transparent;
    border: 1px solid #e1ecc8;
    border-radius: 0.5rem;
    padding: 0.4rem 1rem;
    outline: none;
    font-family : "Inter";
    color: white;

    &::placeholder{
        color: #e1ecc8;       
    }
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0.5rem 0
`