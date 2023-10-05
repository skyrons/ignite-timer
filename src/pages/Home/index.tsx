import { Play } from "phosphor-react";
import { AmountMinutesInput, CountdownContainer, FormContainer, HomeContainer, Separator, StartCountButton, TaskInput } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>   
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        placeholder="Dê um nome para o seu projeto" 
                        id="task"/>
                    <label htmlFor="minutsAmount">durante</label>
                    <AmountMinutesInput 
                        placeholder="00"
                        type="number" 
                        id="minutesAmount"/>
                    <span>minutos</span>
                </FormContainer>
                

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountButton disabled type="submit">
                    <Play size={24} />
                    Começar
                </StartCountButton>
            </form>
        </HomeContainer>
    )
}