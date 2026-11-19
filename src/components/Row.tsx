import { ReactNode } from "react";
import "./style.css"

interface IRowProps{
    children: ReactNode
}

export function Row({children}:IRowProps){
    return (
        <div className="form-row">{children}</div>
    )
}