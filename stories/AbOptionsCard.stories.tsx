import React from "react";

import { AbOptionsCard } from '../src/components/AbOptionsCard';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/AbOptionsCard',
    component: AbOptionsCard

} as ComponentMeta<typeof AbOptionsCard>

const Template: ComponentStory<typeof AbOptionsCard>= () => <AbOptionsCard/>

export const Padrao = Template.bind({});

Padrao.args = {
    opcoes:[ {
        id:1,
        title: 'E-book',
        body: 'R$ 0,00',
        footer: '.pdf, .epub, .mob'
    },
     {
        id:2,
        title: 'Impresso',
        body: 'R$ 0,00',
        footer: '.pdf, .epub, .mob'
    },
     {
        id:3,
        title: 'Impresso + E-book',
        corpo: 'R$ 0,00',
        footer: '.pdf, .epub, .mob'
    }
]
} 



