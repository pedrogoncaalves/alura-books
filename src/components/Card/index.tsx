import React, {ReactNode} from 'react'
import * as C from './styles'




export interface CardProps {
    children: ReactNode
}


export const Card = ({children}: CardProps) => {
    return(
        <C.styledCard>
            {children}
        </C.styledCard> 
    )
}