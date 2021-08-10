import Carousel from '../components/Carousel'
import CardRow from '../components/CardRow'
import ContentCard from '../components/ContentCard'
import CardRowSimple from '../components/CardRowSimple'

export default function Home() {
  return (
    <>
      <Carousel />

      <CardRow
        bgColor=""
        contentIsFluid={false}
        classComponent="py-5"
        titleSection="Welcome To J. Sousa Cleaning Services"
        subTitleSection="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter."
        urlImageCard1="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-1_ekxwsg.png"
        urlImageCard2="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-3_mry7a4.png"
        urlImageCard3="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-2_n4lquf.png"
        sizeImageCard1="50"
        sizeImageCard2="50"
        sizeImageCard3="50"
        titleCard1="Card title 1"
        titleCard2="Card title 2"
        titleCard3="Card title 3"
        textCard1="1 Some quick example text to build on the card title and make up the bulk of the card content."
        textCard2="2 Some quick example text to build on the card title and make up the bulk of the card content."
        textCard3="3 Some quick example text to build on the card title and make up the bulk of the card content."
      />

      <ContentCard
        alignText="right"
        altImage="Woman with some cleaning productss"
        altImgTopic1="Woman with some cleaning productss"
        altImgTopic2="Woman with some cleaning productss"
        bgColor="super-light"
        classContainer=""
        contentIsFluid={false}
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
        urlImgTopic1="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610506244/images-default/iconHouse_hm1mli.svg"
        urlImgTopic2="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610506244/images-default/iconHeart_og4jub.svg"
      />

      <CardRowSimple
        bgColor=""
        contentIsFluid={false}
        cardLeftAltImage=""
        cardLeftText="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate."
        cardLeftTitle="House Cleaning"
        cardLeftUrlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/image-1_z442u1.jpg"
        cardRightAltImage=""
        cardRightText="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate."
        cardRightTitle="Pool Cleaning"
        cardRightUrlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/image-2_wr4znu.jpg"
        classComponent="py-5"
      />
    </>
  )
}
