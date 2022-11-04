import React from "react";
import * as C from './styles'



export interface AbButtonprops {
    text?: string
    type?: 'primario' | 'secundario'
    onClick: () => void
}

export const AbButton = ({text,  onClick, type = 'primario'}: AbButtonprops) => {
    return(
        <C.styledButton onClick={onClick} type={type}>
            {text}
        </C.styledButton>
    )
} 