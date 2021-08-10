import HeroSmall from '../components/HeroSmall'
import Ckeditor from '../components/Ckeditor'

export default function Contact() {
  return (
    <>
      <HeroSmall
        bgColor="light"
        bgImageUrl="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607444937/images-default/hero-small_ejdysb.jpg"
        title="Contact Us"
        colorTitle="primary"
        subTitle="How can we help you?"
        colorSubTitle="dark"
      />
      <Ckeditor
        bgColor="super-light"
        contentIsFluid={false}
        eyebrow="Get In Touch"
        eyebrowLinkColor="primary"
        text="<p>Business conse ctetur adipi sicing elite after smod tempor incid idunt ut labore et dolore magna business rem</p>
          <div class='ckeditor-list-wrapper'>
          <div class='ckeditor-list'>
          <img src='https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610681876/images-default/email-mail-svgrepo-com_tpbfqu.svg' class='ckeditor-list-img' />
          <p class='ckeditor-list-txt'><strong>Email</strong><br>jsousa@email.com</p>
          </div>
          <div class='ckeditor-list'>
          <img src='https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610681876/images-default/phone-call-phone-svgrepo-com_c51jap.svg' class='ckeditor-list-img' />
          <p class='ckeditor-list-txt'><strong>Phone Number</strong><br>+1 888 123 45 67</p>
          </div>
          <div class='ckeditor-list'>
          <img src='https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610682134/images-default/placeholder-svgrepo-com_ocfsb6.svg' class='ckeditor-list-img' />
          <p class='ckeditor-list-txt'><strong>Site Location</strong><br>New York, 56462</p>
          </div>
          </div>
          <div class='text-center col-lg-12'><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6202.454630861065!2d-74.53996769222262!3d40.0574751934984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1610682797562!5m2!1sen!2sbr'
           width='90%' height='350' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe></div>"
        textColor=""
      />
    </>
  )
}
