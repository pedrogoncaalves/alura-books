import React from "react";

import { AbOptionsCard } from '../src/components/AbOptionsCard';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/AbOptionsCard',
    component: AbOptionsCard

} as ComponentMeta<typeof AbOptionsCard>

const Template: ComponentStory<typeof AbOptionsCard>= () => <AbOptionsCard/>

export const Primary = Template.bind({});

Primary.args = {} 

