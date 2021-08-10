import { Story, Meta } from '@storybook/react/types-6-0'
import Feedback from '.'

export default {
  title: 'Feedback',
  component: Feedback
} as Meta

export const Default: Story = (args) => <Feedback {...args} />

Default.args = {
  bgImageUrl: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607919545/images-default/bg-feedback-1920x750_biwmoj.jpg`,
  title: `What Our Clients Say!`,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies gravida volutpat. Etiam a odio purus. Integer consequat neque a orci sagittis, vitae egestas lorem imperdiet. Praesent commodo elit in ex elementum, et convallis massa lobortis.`
}
