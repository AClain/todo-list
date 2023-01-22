import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "components/atoms/Button";
import Flex from "components/atoms/Flex";

export default {
  title: "Atoms/Buttons/Sizes",
  component: Button,
  argTypes: {
    size: {
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
      <Button {...args} size="lg" />
      <Button {...args} />
      <Button {...args} size="sm" />
    </Flex>
  );
};

export const Index = Template.bind({});
Index.args = {
  label: "Button",
};
