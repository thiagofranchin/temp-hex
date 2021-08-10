import { Story, Meta } from '@storybook/react/types-6-0'
import CardRowSimple from '.'

export default {
  title: 'CardRowSimple',
  component: CardRowSimple,
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
        options: [
          'transparent',
          'white',
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'super-light',
          'light',
          'dark',
          'super-dark'
        ]
      }
    }
  }
} as Meta

export const Default: Story = (args) => {
  return <CardRowSimple {...args} />
}

Default.args = {
  classComponent: '',
  cardLeftUrlImage: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/image-1_z442u1.jpg`,
  cardLeftAltImage: '',
  cardLeftTitle: 'House Cleaning',
  cardLeftText:
    'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  cardRightUrlImage: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/image-2_wr4znu.jpg`,
  cardRightAltImage: '',
  cardRightTitle: 'Pool Cleaning',
  cardRightText:
    'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
}
