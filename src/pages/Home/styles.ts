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
const BaseInput = styled.input `
    background: transparent;
    border: none;
    height: 2.5rem;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-500']};
    
    font-size: 1.125rem;
    font-weight: normal;
    &:focus{
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};
    }
    
    &::placeholder{
        color: ${(props) => props.theme['gray-500']};
    }
`;

export const TaskInput = styled(BaseInput) `
    flex: 1;


    &::-webkit-calendar-picker-indicator{
        display:none !important;
    }
`;
export const AmountMinutesInput = styled(BaseInput) `
    width: 4rem;
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
        padding: 2rem 1rem;
        border-radius: 8px;
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

export const BaseCountButton = styled.button `
   
    width: 100%;
    padding: 1;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    
    border: 0;
    border-radius: 8px;

    font-weight: bold;

    color: ${props => props.theme['gray-100']};

    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

export const StartCountButton = styled(BaseCountButton) `
    background-color: ${props => props.theme['green-500']};

    &:not(:disabled):hover {
        background-color: ${props => props.theme['green-700']};
    }
`

export const StopCountButton = styled(BaseCountButton) `
    background-color: ${props => props.theme['red-500']};

    &:not(:disabled):hover {
        background-color: ${props => props.theme['red-700']};
    }
`