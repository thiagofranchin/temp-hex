import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import Logo from '../Logo'
import SocialMedia from '../SocialMedia'

import mainMenu from './content'

import * as S from './styles'

type MainProps = {
  classComponent?: string
  bgColorMenu?: string
  colorTextMenu?: string
  colorMenuIcon?: string
  bgLinkActiveColor?: string
}

const MainMenu = ({
  classComponent,
  bgColorMenu,
  colorTextMenu,
  colorMenuIcon,
  bgLinkActiveColor
}: MainProps) => {
  const router = useRouter()
  let currentPage = ''

  if (router == null) {
    currentPage = '/'
  } else {
    currentPage = router.pathname
  }

  return (
    <S.Wrapper className={classComponent && classComponent}>
      <nav
        className={`navbar navbar-expand-md ${
          bgColorMenu ? `bg-${bgColorMenu}` : 'bg-dark'
        }`}
      >
        <a className="navbar-brand d-md-none" href="/">
          <Logo widthLogo="200" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <Menu
              width="30"
              className={
                colorMenuIcon ? `text-${colorMenuIcon}` : 'text-primary'
              }
            />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                colorTextMenu ? `text-${colorTextMenu}` : 'text-primary'
              }`}
            >
              <SocialMedia
                alignIcon="center"
                colorIcon="primary"
                titleFacebook="Follow us on Facebook"
                titleInstagram="Follow us on Instagram"
                urlFacebook="https://www.facebook.com/"
                urlInstagram="https://www.instagram.com/"
                widthIcon={30}
                classComponent="pl-3 pr-2 mt-2 d-md-none"
              />
            </li>
            <>
              {mainMenu.map(({ label, url }, index) => (
                <S.MenuButton
                  bgColorLink={bgLinkActiveColor}
                  className={`nav-item ${url == currentPage && 'active'} ${
                    colorTextMenu ? `text-${colorTextMenu}` : 'text-primary'
                  }`}
                  key={index}
                >
                  <Link href={url} prefetch={false}>
                    <a
                      className={`nav-link ${
                        colorTextMenu && `text-${colorTextMenu}`
                      }`}
                    >
                      {label}
                    </a>
                  </Link>
                </S.MenuButton>
              ))}
            </>
          </ul>
        </div>
      </nav>
    </S.Wrapper>
  )
}

export default MainMenu
