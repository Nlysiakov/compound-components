import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { FormContext } from "./useFormContext";

import { Row } from "./Row";
import { Input } from "./Input";
import { Button } from "./Button";


interface IFormsProps{
    children: ReactNode;
    setFormData: Dispatch<SetStateAction<Record<string, string>>>
}

function Form({children, setFormData}:IFormsProps){
    const [formData, setLocalFormData]=useState<Record<string, string>>({})

    const setFieldValue=(id: string, value: string)=>{
        setLocalFormData((prev)=>{
            const next={...prev, [id]: value}
            setFormData(next)
            return next
        })
    }

    return (
        <FormContext.Provider value={{formData, setFieldValue}}>
            <form onSubmit={(e)=>e.preventDefault()}>
                {children}
            </form>
        </FormContext.Provider>
    )
}





type TFormComponent = typeof Form & {
    Row: typeof Row;
    Input: typeof Input;
    Button: typeof Button
}

const FormCompound=Form as TFormComponent
FormCompound.Row=Row
FormCompound.Input=Input
FormCompound.Button=Button

export{FormCompound as Form}