import { StoryFn, Meta } from '@storybook/react';
import ColorPicker, { IColorPickerProps } from './ColorPicker';
import { ColorPickerMock } from './ColorPicker.mocks';

export default {
  title: 'templates/ColorPicker',
  component: ColorPicker,
  argTypes: {},
} as Meta<typeof ColorPicker>;

const Template: StoryFn<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...ColorPickerMock.base,
} as IColorPickerProps;