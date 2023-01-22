import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "components/atoms/Button";
import Flex from "components/atoms/Flex";

export default {
  title: "Atoms/Buttons/Colors",
  component: Button,
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
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

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Flex direction="column">
      <Button {...args} color="info" />
      <Button {...args} color="success" />
      <Button {...args} color="warning" />
      <Button {...args} color="error" />
    </Flex>
  );
};

export const Index = Template.bind({});
Index.args = {
  label: "Button",
};
