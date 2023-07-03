import { StoryFn, Meta } from '@storybook/react';
import Preview from './Preview';
import { PreviewMock } from './Preview.mocks';

export default {
  title: 'templates/Preview',
  component: Preview,
  argTypes: {},
} as Meta<typeof Preview>;

const Template: StoryFn<typeof Preview> = () => (
  <Preview />
);

export const Base = Template.bind({});

Base.args = {
  ...PreviewMock.base,
};