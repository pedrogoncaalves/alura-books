import React from "react";

import * as C from './styles'

export interface ITagProps {
    text: string;
}


export const Tag = ({ text }: ITagProps) => {
    return(
        <C.styledTag>
            {text}
        </C.styledTag>
    )
}