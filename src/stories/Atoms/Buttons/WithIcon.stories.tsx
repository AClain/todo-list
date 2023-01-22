import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconInfoCircle } from '@tabler/icons';
import Button from 'components/atoms/Button';

export default {
  title: 'Atoms/Buttons/WithIcon',
  component: Button,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    styles: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: 'Button',
  leftIcon: <IconInfoCircle size={20} />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: 'Button',
  rightIcon: <IconInfoCircle size={20} />,
};
