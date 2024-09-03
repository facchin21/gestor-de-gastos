import styled from "styled-components";

interface CategoryProps {
    text?: string;
    color?: string;
    bgcolor?: string;
}

export const CategoryStyled = styled.div<CategoryProps>`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: ${(props) => props.bgcolor || 'none'};
    color: ${(props) => props.color || 'black'};
`;

export const Category = ({ text, color, bgcolor }: CategoryProps) => {
    return (
        <CategoryStyled color={color} bgcolor={bgcolor}>
            {text}
        </CategoryStyled>
    );
};