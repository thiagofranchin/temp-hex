import { Story, Meta } from '@storybook/react/types-6-0'
import Faq from '.'

export default {
  title: 'Faq',
  component: Faq
} as Meta

export const Default: Story = (args) => (
  <div className="container mt-5">
    <Faq {...args} />
  </div>
)

Default.args = {
  title: 'Why Choosing Us?'
}
