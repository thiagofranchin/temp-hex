import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '../Container'
import Logo from '../Logo'
import SocialMedia from '../SocialMedia'
import SimpleRow from '../SimpleRow'

import * as S from './styles'

import mainMenu from './content'

type Props = {
  classComponent?: string
  colorTextMenu?: string
}

const Footer = ({ classComponent, colorTextMenu }: Props) => {
  const router = useRouter()
  let currentPage = ''

  if (router == null) {
    currentPage = '/'
  } else {
    currentPage = router.pathname
  }

  return (
    <>
      <S.Wrapper
        className={`footer pt-5 pb-2 pb-md-5 bg-dark text-white ${classComponent}`}
      >
        <Container>
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-left">
            <Logo
              classComponent="mb-3"
              urlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1614049569/images-default/jsousa-logo-2-light_an9lrx.svg"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              cumque ab earum soluta nihil quam incidunt, necessitatibus
              nesciunt esse quo, fuga itaque? Dolore beatae doloremque
              distinctio excepturi ut unde delectus.
            </p>
          </div>
          <div className="col-md-2 mb-4 mb-md-0 text-center text-md-left">
            <S.TitleItem>Pages:</S.TitleItem>
            <ul className="navbar-nav">
              {mainMenu.map(({ label, url }, index) => (
                <S.MenuButton
                  className={`nav-item ${url == currentPage && 'active'} ${
                    colorTextMenu ? `text-${colorTextMenu}` : 'text-primary'
                  }`}
                  key={index}
                >
                  <Link href={url} prefetch={false}>
                    <a
                      className={`nav-link ${
                        colorTextMenu && `text-${colorTextMenu}`
                      } `}
                    >
                      {label}
                    </a>
                  </Link>
                </S.MenuButton>
              ))}
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0 text-center text-md-left">
            <S.TitleItem>Contact Info</S.TitleItem>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              cumque ab earum soluta nihil quam incidunt, necessitatibus
              nesciunt esse quo, fuga itaque? Dolore beatae doloremque
              distinctio excepturi ut unde delectus.
            </p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0 text-center text-md-left">
            <S.TitleItem>Working Hours</S.TitleItem>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              cumque ab earum soluta nihil quam incidunt, necessitatibus
              nesciunt esse quo, fuga itaque.
            </p>
            <SocialMedia
              widthIcon={30}
              classComponent="pt-3 pt-md-1"
              titleFacebook="Follow us on Facebook"
              titleInstagram="Follow us on Instagram"
              urlFacebook="https://www.facebook.com/"
              urlInstagram="https://www.instagram.com/"
            />
          </div>
        </Container>
      </S.Wrapper>
      <SimpleRow
        contentIsFluid={true}
        classComponent="py-3"
        text="© J. Sousa Cleaning Services 2021 | All rights reserved."
      />
    </>
  )
}

export default Footer
