import * as React from 'react'
import { FormContainer, MultiSelectElement } from '../src'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SubmitButton } from '../src/Shared'


export default {
  title: 'MultiSelectElement',
  component: MultiSelectElement
} as ComponentMeta<typeof MultiSelectElement>

const Template: ComponentStory<typeof MultiSelectElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <MultiSelectElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]



export const Basic = Template.bind({})
Basic.args = {
  name: 'basic',
  menuItems: names
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  name: 'basic',
  label: 'Select Field',
  menuItems: names
}

export const Required = Template.bind({})
Required.args = {
  name: 'required',
  label: 'Required Field',
  menuItems: names,
  required: true
}

export const WithChips = Template.bind({})
WithChips.args = {
  name: 'chips',
  label: 'Required Field',
  menuItems: names,
  showChips: true
}

// const objectVals = [
//   { id: 1, name: 'Alpha' },
//   { id: 2, name: 'Beta' },
//   { id: 3, name: 'Celsius' },
//   { id: 4, name: 'Delta' }
// ]
// export const Object = Template.bind({})
// Object.args = {
//   name: 'object',
//   label: 'Object Field',
//   menuItems: objectVals,
//   itemValue:'id',
//   itemKey:'id',
//   itemLabel:'name'
// }
