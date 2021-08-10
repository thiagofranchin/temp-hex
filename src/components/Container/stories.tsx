import { Story, Meta } from '@storybook/react/types-6-0'
import Container from '.'

export default {
  title: 'Container',
  component: Container
} as Meta

export const Default: Story = (args) => {
  return (
    <Container {...args}>
      <div className="col-sm-4 bg-primary p-3">Primary</div>
      <div className="col-sm-4 bg-success p-3">Success</div>
      <div className="col-sm-4 bg-danger p-3">Danger</div>
    </Container>
  )
}
