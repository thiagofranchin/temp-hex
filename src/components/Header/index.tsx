import Container from '../Container'
import Logo from '../Logo'
import CardIcon from '../CardIcon'
import SocialMedia from '../SocialMedia'
import MainMenu from '../MainMenu'

import * as S from './styles'

type Props = {
  classComponent?: string
}

const Header = ({ classComponent }: Props) => (
  <S.Wrapper className={classComponent}>
    <header>
      <MainMenu classComponent="d-md-none" />
      <Container isFluid={false} classContainer="d-none d-md-block">
        <div className="col-3">
          <Logo classComponent="py-4" />
        </div>
        <div className="col-7">
          <div className="row">
            <CardIcon
              cardLeftText="8:00AM - 6:00PM"
              cardLeftTitle="Opening Hours"
              cardRightText="014 7422 866"
              cardRightTitle="Contact Us"
              classComponent="py-2"
              colorIcon="primary"
              sizeIcon={30}
            />
          </div>
        </div>
        <div className="col-2">
          <SocialMedia
            alignIcon="right"
            colorIcon="primary"
            titleFacebook="Follow us on Facebook"
            titleInstagram="Follow us on Instagram"
            urlFacebook="https://www.facebook.com/"
            urlInstagram="https://www.instagram.com/"
            widthIcon={30}
            classComponent="pt-4"
          />
        </div>
        <div className="col-12">
          <MainMenu
            bgColorMenu="transparent"
            classComponent="border-top"
            colorTextMenu="primary"
          />
        </div>
      </Container>
    </header>
  </S.Wrapper>
)

export default Header
