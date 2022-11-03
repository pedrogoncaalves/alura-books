import React from "react";

import { AbButton } from '../src/components/AbButton';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/AbButton',
    component: AbButton

} as ComponentMeta<typeof AbButton>

const Template: ComponentStory<typeof AbButton>= () => <AbButton/>

export const PrimaryButton = Template.bind({});