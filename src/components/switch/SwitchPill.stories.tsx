import { StoryFn, Meta } from '@storybook/react';
import SwitchPill, { ISwitchPillProps } from './SwitchPill';
import { SwitchPillMock } from './SwitchPill.mocks';

export default {
  title: 'templates/SwitchPill',
  component: SwitchPill,
  argTypes: {},
} as Meta<typeof SwitchPill>;

const Template: StoryFn<typeof SwitchPill> = (args) => (
  <SwitchPill {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...SwitchPillMock.base,
} as ISwitchPillProps;