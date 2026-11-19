import { useFormContext } from "./useFormContext"

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 
    'value' | 'onChange'>{
    id: string
}   

export function Input({id, ...rest}: IInputProps){
    const {formData, setFieldValue}=useFormContext()

    return (
        <input  
            id={id} 
            name={id} 
            value={formData[id] ?? ""} 
            onChange={(e)=>setFieldValue(id, e.target.value)} 
            {...rest}/>
    )
}



