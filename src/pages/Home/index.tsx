import { useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { Play } from "phosphor-react";

import { 
    AmountMinutesInput, 
    CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    Separator, 
    StartCountButton, 
    TaskInput 
} from "./styles";
import { useState } from 'react';

const newCicleFormValidationSchema = zod.object({
    task: zod.string().min(1),
    minutesAmount: zod.number().min(5).max(60)
})

interface Cycle {
    id: string,
    task: string,
    minutesAmount: number,
}

type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>


export function Home(){

    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

    const { register, handleSubmit, watch, formState, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCicleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    });

    function handleCreateNewCycle(data: NewCycleFormData){
        const id = String(new Date().getTime());
        const newCycle: Cycle = {
            id: id,
            task: data.task,
            minutesAmount: data.minutesAmount,
        }
        setActiveCycleId(id);
        setCycles((state) => [...state, newCycle])

        reset()
    }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    console.log(activeCycle)

    // console.log(formState.errors);

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
                        // max={60}612
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