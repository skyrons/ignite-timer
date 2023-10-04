import { styled } from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 3.5em;
    }

`;

export const FormContainer = styled.div `
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    flex-wrap: wrap;

    color: ${props => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;

`;

export const CountdownContainer = styled.div `

    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    color: ${props => props.theme['gray-100']};
    font-weight: 700;
    line-height: 8rem;

    display: flex;
    gap: 1rem;

    span{
        background-color: ${props => props.theme['gray-700']};
        padding:2rem 1rem;
        border-radius: 8px
    }

`;

export const Separator = styled.div `
    padding: 2rem 0;
    background-color: none;

    color: ${props => props.theme['green-500']};

    width: 6rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;