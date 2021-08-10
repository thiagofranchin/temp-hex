import { Story, Meta } from '@storybook/react/types-6-0'
import Icons from '.'

export default {
  title: 'Icons',
  component: Icons,
  argTypes: {
    colorIcon: { control: 'color' }
  }
} as Meta

export const Default: Story = (args) => <Icons {...args} />
