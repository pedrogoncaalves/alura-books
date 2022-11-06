
import React from "react";
import { Tag, ITagProps } from '../src/components/Tag'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbTag',
    component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) =>  {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    text: 'Tag'
} as ITagProps