import HeroSmall from '../components/HeroSmall'
import ContentCardTabs from '../components/ContentCardTabs'
import CardRowSimple from '../components/CardRowSimple'

export default function About() {
  return (
    <>
      <HeroSmall
        bgColor="light"
        bgImageUrl="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607444937/images-default/hero-small_ejdysb.jpg"
        colorSubTitle="white"
        colorTitle="primary"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title="About us"
      />
      <ContentCardTabs classComponent="py-5" />
      <CardRowSimple
        bgColor="gray-super-light"
        cardLeftAltImage=""
        cardLeftText="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at."
        cardLeftTitle="House Cleaning"
        cardLeftUrlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/image-1_z442u1.jpg"
        cardRightAltImage=""
        cardRightText="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at."
        cardRightTitle="Pool Cleaning"
        cardRightUrlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/image-2_wr4znu.jpg"
        classComponent="py-5"
      />
    </>
  )
}
