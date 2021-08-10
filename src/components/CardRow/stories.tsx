import { Story, Meta } from '@storybook/react/types-6-0'
import CardRow from '.'

export default {
  title: 'CardRow',
  component: CardRow,
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
    },
    sizeImageCard1: {
      control: {
        type: 'select',
        options: ['25', '50', '75', '100']
      }
    },
    sizeImageCard2: {
      control: {
        type: 'select',
        options: ['25', '50', '75', '100']
      }
    },
    sizeImageCard3: {
      control: {
        type: 'select',
        options: ['25', '50', '75', '100']
      }
    }
  }
} as Meta

export const Default: Story = (args) => <CardRow {...args} />

Default.args = {
  titleSection: 'Welcome To J. Sousa Cleaning Services',
  subTitleSection: `Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter.`,
  urlImageCard1: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-1_ekxwsg.png`,
  urlImageCard2: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-3_mry7a4.png`,
  urlImageCard3: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-2_n4lquf.png`,
  altImageCard1: `Alt image 1`,
  altImageCard2: `Alt image 2`,
  altImageCard3: `Alt image 3`,
  sizeImageCard1: `50`,
  sizeImageCard2: `50`,
  sizeImageCard3: `50`,
  titleCard1: `Card title 1`,
  titleCard2: `Card title 2`,
  titleCard3: `Card title 3`,
  textCard1: `1 Some quick example text to build on the card title and make up the bulk of the card content.`,
  textCard2: `2 Some quick example text to build on the card title and make up the bulk of the card content.`,
  textCard3: `3 Some quick example text to build on the card title and make up the bulk of the card content.`,
  classComponent: `py-5`
}
