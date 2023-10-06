import { styled } from "styled-components";

export const HistoryContainer = styled.div `
    flex: 1;
    padding-left: 3rem;
    
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    h1{
        color: ${(props) => props.theme["gray-100"]};
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
    }
`;

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;

    table{
        width: 100%;
        border-collapse: collapse;

        min-width: 600px;

        th{
            background-color:${(props) => props.theme["gray-600"]};
            color: ${(props) => props.theme["gray-100"]};

            padding: 1rem;


            text-align: left;
            font-family: Roboto;
            font-size: 0.87rem;
            font-style: normal;
            line-height: 1.4rem;
            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }
            &:last-child{
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }

            
        }
        td{
            background-color: ${(props) => props.theme["gray-700"]};
            border-top: 4px solid ${(props) => props.theme["gray-900"]};

            padding: 1rem;

            font-size:0.87rem;
            line-height:1.4rem;
            
            &:first-child{
                padding-left: 1.5rem;
                width: 50%;
            }
            &:last-child{
                padding-right: 1.5rem;
            }

        }
    }

`;