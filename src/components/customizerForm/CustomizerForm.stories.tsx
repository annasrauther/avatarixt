import { StoryFn, Meta } from '@storybook/react';
import CustomizerForm, { ICustomizerFormProps } from './CustomizerForm';
import { CustomizerFormMock } from './CustomizerForm.mocks';

export default {
  title: 'templates/CustomizerForm',
  component: CustomizerForm,
  argTypes: {},
} as Meta<typeof CustomizerForm>;

const Template: StoryFn<typeof CustomizerForm> = (args) => (
  <CustomizerForm {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...CustomizerFormMock.base,
} as ICustomizerFormProps;