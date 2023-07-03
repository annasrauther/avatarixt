import { StoryFn, Meta } from '@storybook/react';
import Card, { ICardProps } from './Card';
import { CardMock } from './Card.mocks';

export default {
  title: 'templates/Card',
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...CardMock.base,
} as ICardProps;