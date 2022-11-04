import React from "react";

import { AbButton, AbButtonprops } from '../src/components/AbButton';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/AbButton',
    component: AbButton

} as ComponentMeta<typeof AbButton>

const Template: ComponentStory<typeof AbButton>= (args) => <AbButton{...args}/>

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
    text: 'Ab Button primário' ,
    type: 'primario'

} as AbButtonprops

export const SecundaryButton = Template.bind({});

SecundaryButton.args = {
    text: 'Ab Button secundário',
    type: 'secundario'
} as AbButtonprops