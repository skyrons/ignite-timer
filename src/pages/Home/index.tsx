import { useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import {differenceInSeconds} from 'date-fns'

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
import { useEffect, useState } from 'react';

const newCicleFormValidationSchema = zod.object({
    task: zod.string().min(1),
    minutesAmount: zod.number().min(5).max(60)
})

interface Cycle {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
}

type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>


export function Home(){

    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCicleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    });

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    useEffect(() => {

        let interval: number 

        if (activeCycle) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            interval = setInterval(() => {
                setAmountSecondsPassed(
                    differenceInSeconds(new Date(), activeCycle.startDate)
                )
            })
            
            return () => {
                clearInterval(interval)
            }
        }
    }, [activeCycle])

    function handleCreateNewCycle(data: NewCycleFormData){
        const id = String(new Date().getTime());
        const newCycle: Cycle = {
            id: id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }
        setActiveCycleId(id);
        setCycles((state) => [...state, newCycle])
        setAmountSecondsPassed(0)

        reset()
    }

    console.log(activeCycle)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesCountAtual = Math.floor(currentSeconds / 60);
    const secondsCountAtual = currentSeconds % 60;

    const minutes = String(minutesCountAtual).padStart(2, '0');
    const seconds = String(secondsCountAtual).padStart(2, '0');

    useEffect(() => {
        if(activeCycle){
            document.title = `${minutes}:${seconds}`
        }
    }, [minutes, seconds, activeCycle])

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
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountdownContainer>

                <StartCountButton  disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </StartCountButton>
            </form>
        </HomeContainer>
    )
}