import { createContext, useContext } from "react";

interface IFormContextProps{
    formData: Record<string, string>;
    setFieldValue: (id: string, value: string)=>void
}


export const FormContext=createContext<IFormContextProps | null>(null)

export function useFormContext(){
    const context=useContext(FormContext)

    if(!context){
        throw new Error('Ошибка контекста')
    }

    return context
}