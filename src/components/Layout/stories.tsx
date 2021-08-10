import { Story, Meta } from '@storybook/react/types-6-0'
import Layout from '.'
import ContentCard from '../ContentCard'

export default {
  title: 'Layout',
  component: Layout
} as Meta

export const Default: Story = (args) => (
  <Layout {...args}>
    <ContentCard
      alignText="right"
      altImage="Woman with some cleaning productss"
      altImgTopic1="Woman with some cleaning productss"
      altImgTopic2="Woman with some cleaning productss"
      bgColor="transparent"
      classContainer=""
      eyebrow="Eyebrow"
      eyebrowLinkColor="primary"
      linkText="About Us"
      linkUrl="Url"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus."
      textColor=""
      textTopic1="We offer a flat-rate pricing for our weekly biweekly or monthly residential cleaning service wWhether"
      textTopic2="We offer a flat-rate pricing for our weekly biweekly"
      title="Title"
      urlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274341/images-default/image-content-card-1_h7qi0w.jpg"
      urlImgTopic1="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607895219/images-default/iconHouse_vwnc0f.png"
      urlImgTopic2="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607895219/images-default/iconHouse2_pubhex.png"
    />
  </Layout>
)
