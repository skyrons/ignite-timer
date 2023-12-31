import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' ;
interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
};


export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    margin: 1rem;
    border-radius: 8px;

    background-color: ${props => props.theme["green-300"]};
    color: ${props => props.theme["white"]};

    /* ${props => {
        return css`color: ${buttonVariants[props.variant]}`
    }} */
`