import React from "react";
import { useState } from "react";
import * as C from './styles'

export interface IAbOptionsCard {
    isSelected: true | false
}

export interface IAbOptions {
    id: number
    title: string
    body: string
    footer: string
}

export interface IAbOptionsProps {
    options: IAbOptions[]
    standardValue?: IAbOptions | null
    onChange?: (option: IAbOptions) => void  
}

export const AbOptionsCard = ({ options, onChange, standardValue }: IAbOptionsProps) => {
    const [selection, setSelection] = useState<IAbOptions | null>(standardValue ?? null)
    const toSelect = (option: IAbOptions) : void => {
        setSelection(option)
        if (onChange) {
            onChange(option)
        }
    }

    return(<>
    {options.map(option => 
        <C.styledSection  onClick={() => toSelect(option)}
            key={option.id} isSelected={selection?.id == option.id}>
            <header>
                {option.title}
            </header>
            <div>
                <strong>{option.body}</strong>
            </div>
            <footer>
                {option.footer}
            </footer>
        </C.styledSection>
    )}
        </>
    )
    }
