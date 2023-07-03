import { StoryFn, Meta } from '@storybook/react';
import BaseTemplate, { IBaseTemplateProps } from './BaseTemplate';
import { BaseTemplateMock } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as Meta<typeof BaseTemplate>;

const Template: StoryFn<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...BaseTemplateMock.base,
} as IBaseTemplateProps;