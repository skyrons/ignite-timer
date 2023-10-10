import { useForm} from 'react-hook-form'

import { Play } from "phosphor-react";
import { AmountMinutesInput, CountdownContainer, FormContainer, HomeContainer, Separator, StartCountButton, TaskInput } from "./styles";

export function Home(){

    const { register, handleSubmit, watch } = useForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleCreateNewCycle(data: any){
        console.log(data);
    }

    const task = watch('task');
    const isSubmitDisabled = !task;


    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>   
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        placeholder="Dê um nome para o seu projeto" 
                        id="task"
                        list='task-suggestion'
                        {...register("task")}
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
                        {...register('minutesAmount', { valueAsNumber: true })}
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

                <StartCountButton  disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </StartCountButton>
            </form>
        </HomeContainer>
    )
}