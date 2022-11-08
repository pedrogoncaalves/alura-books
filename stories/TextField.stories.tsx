import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { textField, IFieldTextProps } from '../src/components/TextField'

export default {
  title: 'componentes/AbCampoTexto',
  component: textField,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof textField>;

const Template: ComponentStory<typeof textField> = (args) => <textField {...args} />;

export const AbCampoTextoComponent = Template.bind({})
AbCampoTextoComponent.args = {
    label: 'Uma label interessante',
} as IFieldTextProps