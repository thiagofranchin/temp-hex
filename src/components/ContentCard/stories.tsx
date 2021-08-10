import { Story, Meta } from '@storybook/react/types-6-0'
import ContentCard from '.'

export default {
  title: 'ContentCard',
  component: ContentCard,
  argTypes: {
    eyebrowLinkColor: {
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
    alignText: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    },
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
    textColor: {
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
    borderColorImage: {
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

export const Default: Story = (args) => <ContentCard {...args} />

Default.args = {
  eyebrow: 'Eyebrow',
  eyebrowLinkColor: 'primary',
  title: 'Title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus.',
  alignText: 'right',
  bgColor: 'transparent',
  textColor: '',
  classContainer: '',
  urlImgTopic1: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610506244/images-default/iconHouse_hm1mli.svg`,
  altImgTopic1: 'Woman with some cleaning productss',
  textTopic1:
    'We offer a flat-rate pricing for our weekly biweekly or monthly residential cleaning service wWhether',
  urlImgTopic2: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610506244/images-default/iconHeart_og4jub.svg`,
  altImgTopic2: 'Woman with some cleaning productss',
  textTopic2: 'We offer a flat-rate pricing for our weekly biweekly',
  urlImage: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274341/images-default/image-content-card-1_h7qi0w.jpg`,
  altImage: 'Woman with some cleaning productss',
  linkText: 'About Us',
  linkUrl: 'Url',
  contentIsFluid: false
}
