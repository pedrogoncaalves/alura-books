import React from "react";

import * as C from './styles'

export interface IAbOptionsCard {
    isSelected: true | false
}

export const AbOptionsCard = () => {
    return(<>
        <C.styledSection isSelected={false}>
            <header>
                E-book
            </header>
            <div>
                <strong>R$ 00,00</strong>
            </div>
            <footer>
                .pdf, .epub, .mob
            </footer>
        </C.styledSection>
        <C.styledSection isSelected={true}>
            <header>
                E-book
            </header>
            <div>
                <strong>R$ 00,00</strong>
            </div>
            <footer>
                .pdf, .epub, .mob
            </footer>
        </C.styledSection>
        <C.styledSection isSelected={true}>
            <header>
                E-book
            </header>
            <div>
                <strong>R$ 00,00</strong>
            </div>
            <footer>
                .pdf, .epub, .mob
            </footer>
        </C.styledSection>
        <C.styledSection isSelected={false}>
            <header>
                E-book
            </header>
            <div>
                <strong>R$ 00,00</strong>
            </div>
            <footer>
                .pdf, .epub, .mob
            </footer>
        </C.styledSection>
        </>
    )
}