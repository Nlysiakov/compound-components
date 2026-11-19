import { ButtonHTMLAttributes, ReactNode } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export function Button({children, ...rest}:IButtonProps){
    return(
        <button 
            type="button"
            className="form-button"
            {...rest}
            >
            {children}
        </button>
    )
}