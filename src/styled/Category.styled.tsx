import styled from "styled-components";

interface CategoryProps {
    text?: string;
    color?: string;
    bgcolor?: string;
    icon?: React.ComponentType;
    cursor?: string;
    bgHover?: string;
    onClick?: () => void;
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
    cursor: ${(props) => props.cursor || 'default'};
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.bgHover || props.bgcolor};
    }
`;

export const Category = ({ text, color, bgcolor }: CategoryProps) => {
    return (
        <CategoryStyled color={color} bgcolor={bgcolor}>
            {text}
        </CategoryStyled>
    );
};

export const AddEditCategory = ({ text, icon: Icon, color, bgcolor, cursor, bgHover, onClick }: CategoryProps) => {
    return (
        <CategoryStyled 
        color={color}
        bgcolor={bgcolor}
        cursor={cursor} 
        bgHover={bgHover}
        onClick={onClick} >
            {Icon && <Icon style={{ marginRight: '8px' }} />}
            {text}
        </CategoryStyled>
    );
};
