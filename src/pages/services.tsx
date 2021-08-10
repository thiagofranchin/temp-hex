import Carousel from '../components/Carousel'
import CardRow from '../components/CardRow'
import ContentCard from '../components/ContentCard'
import Jumbotron from '../components/Jumbotron'
import BeforeAfter from '../components/BeforeAfter'

export default function Services() {
  return (
    <>
      <Carousel />
      <CardRow
        bgColor=""
        contentIsFluid={false}
        classComponent="py-5"
        titleSection="Services We Offer"
        subTitleSection="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter ."
        urlImageCard1="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610681908/images-default/service2_belmfb.jpg"
        urlImageCard2="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610681908/images-default/service1_zdellg.jpg"
        urlImageCard3="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610681908/images-default/service3_vyddsa.jpg"
        sizeImageCard1="75"
        sizeImageCard2="75"
        sizeImageCard3="75"
        titleCard1="Office cleaning"
        titleCard2="Floor cleaning"
        titleCard3="Pool Cleaning"
        textCard1="Lorem ipsum dolor sit amet consectetur adipiscing elited hasellus. "
        textCard2="Lorem ipsum dolor sit amet consectetur adipiscing elited hasellus. "
        textCard3="Lorem ipsum dolor sit amet consectetur adipiscing elited hasellus."
      />
      <ContentCard
        alignText="left"
        altImage="Woman with some cleaning productss"
        altImgTopic1="Woman with some cleaning productss"
        altImgTopic2="Woman with some cleaning productss"
        bgColor="super-light"
        classContainer=""
        contentIsFluid={false}
        eyebrow=""
        eyebrowLinkColor="primary"
        linkText=""
        linkUrl=""
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus."
        textColor=""
        textTopic1="We offer a flat-rate pricing for our weekly biweekly or monthly residential cleaning service wWhether"
        textTopic2="We offer a flat-rate pricing for our weekly biweekly"
        title="Title"
        urlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274341/images-default/image-7_fpt3rl.jpg"
        urlImgTopic1="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610506244/images-default/iconHouse_hm1mli.svg"
        urlImgTopic2="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610506244/images-default/iconHeart_og4jub.svg"
      />
      <Jumbotron
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus."
        textAlign=""
        textColor="white"
        bgColor="primary"
        classContainer=""
        contentIsFluid={false}
      />
      <BeforeAfter
        classComponent="py-5"
        positionLine={75}
        titleSection="Before and After"
        subTitleSection="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor."
      />
    </>
  )
}
