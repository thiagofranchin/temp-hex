import Container from '../Container'
import * as S from './styles'

type Props = {
  bgColor?: string
  classComponent?: string
  contentIsFluid?: boolean
  eyebrow?: string
  eyebrowLinkColor?: string
  text?: string
  textColor?: string
  title?: string
}
const Ckeditor = ({
  bgColor,
  classComponent,
  contentIsFluid,
  eyebrow,
  eyebrowLinkColor,
  text,
  textColor,
  title
}: Props) => (
  <div className={bgColor ? `bg-${bgColor}` : 'bg-transparent'}>
    <Container
      isFluid={contentIsFluid ? contentIsFluid : false}
      classContainer={classComponent}
    >
      <S.CkeditorWrapper
        className={`jumbotron
      ${bgColor ? `bg-${bgColor}` : 'bg-transparent'}
      ${textColor && `text-${textColor}`}
    `}
      >
        <S.CkeditorRowWrapper className={`d-flex row`}>
          <S.CkeditorColumnWrapper className="col-lg-12">
            {eyebrow && (
              <S.CkeditorEyeBrow
                className={`${
                  eyebrowLinkColor && `text-${eyebrowLinkColor}`
                } text-center text-lg-left py-4 py-lg-0`}
              >
                <small
                  className={`bor-header ${
                    eyebrowLinkColor && `bg-${eyebrowLinkColor}`
                  }`}
                ></small>
                {eyebrow}
                <small
                  className={`bor-header bor-right ${
                    eyebrowLinkColor && `bg-${eyebrowLinkColor}`
                  }`}
                ></small>
              </S.CkeditorEyeBrow>
            )}
            {title && (
              <div
                className="ckeditor-title text-center text-lg-left pt-lg-2 pb-lg-1"
                dangerouslySetInnerHTML={{
                  __html: `${title}`
                }}
              ></div>
            )}
            {text && (
              <div
                className="ckeditor-text text-center text-lg-left py-4 pt-lg-1"
                dangerouslySetInnerHTML={{
                  __html: `${text}`
                }}
              ></div>
            )}
          </S.CkeditorColumnWrapper>
        </S.CkeditorRowWrapper>
      </S.CkeditorWrapper>
    </Container>
  </div>
)

export default Ckeditor
