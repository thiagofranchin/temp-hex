import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import * as S from './styles'

type Props = {
  classComponent?: string
  colorIcon?: string
  alignIcon?: string
  widthIcon?: number
  urlFacebook?: string
  urlInstagram?: string
  titleFacebook?: string
  titleInstagram?: string
}

const SocialMedia = ({
  classComponent,
  colorIcon,
  alignIcon,
  widthIcon = 50,
  urlFacebook,
  urlInstagram,
  titleFacebook,
  titleInstagram
}: Props) => (
  <S.Wrapper
    className={`${classComponent} ${alignIcon && `text-${alignIcon}`}`}
  >
    <a
      className={colorIcon && `text-${colorIcon}`}
      href={urlFacebook}
      title={titleFacebook}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookSquare width={widthIcon} />
    </a>
    <a
      className={colorIcon && `text-${colorIcon}`}
      href={urlInstagram}
      title={titleInstagram}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram width={widthIcon} />
    </a>
  </S.Wrapper>
)

export default SocialMedia
