import { ComponentStory, ComponentMeta } from '@storybook/react';
import Flex from 'components/atoms/Flex';
import { FC, PropsWithChildren } from 'react';

export default {
  title: 'Atoms/Flex/Row/Justify',
  component: Flex,
  argTypes: {
    direction: {
      table: {
        disable: true,
      },
    },
    justify: {
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
} as ComponentMeta<typeof Flex>;

const DemoBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      align="center"
      styles={{ height: '50px', width: '50px', borderRadius: '8px', backgroundColor: 'var(--success)' }}
    >
      {children}
    </Flex>
  );
};

const Template: ComponentStory<typeof Flex> = (args) => {
  return (
    <Flex direction="column" gap={10}>
      <Flex {...args} justify="start" styles={{ border: 'solid 1px white' }}>
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
      </Flex>

      <Flex {...args} styles={{ border: 'solid 1px white' }}>
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
      </Flex>

      <Flex {...args} justify="end" styles={{ border: 'solid 1px white' }}>
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
      </Flex>

      <Flex {...args} justify="around" styles={{ border: 'solid 1px white' }}>
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
      </Flex>

      <Flex {...args} justify="between" styles={{ border: 'solid 1px white' }}>
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
      </Flex>

      <Flex {...args} justify="evenly" styles={{ border: 'solid 1px white' }}>
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
      </Flex>
    </Flex>
  );
};

export const Index = Template.bind({});
