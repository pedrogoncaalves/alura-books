import React from "react";

import { Card } from '../src/components/Card';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/AbButton',
    component: Card

} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card>= () => <Card/>

export const CardWrapper = Template.bind({});