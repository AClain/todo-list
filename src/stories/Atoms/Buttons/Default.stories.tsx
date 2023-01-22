import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "components/atoms/Button";

export default {
  title: "Atoms/Buttons/Default",
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

export const Index = Template.bind({});
Index.args = {
  label: "Button",
};
