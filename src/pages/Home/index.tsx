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
                        id="task"
                        list='task-suggestion'
                        />

                    <datalist id="task-suggestion">
                        <option value="Opition1"/>
                        <option value="Opition2"/>
                        <option value="Opition3"/>
                        <option value="DANONE"/>
                    </datalist>  
                    <label htmlFor="minutsAmount">durante</label>
                    <AmountMinutesInput 
                        placeholder="00"
                        type="number" 
                        id="minutesAmount"
                        step={5}
                        min={5}
                        max={60}
                        />
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