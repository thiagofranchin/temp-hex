import * as S from './styles'

type Props = {
  alignText?: string
  classComponent?: string
  title?: string
  colorTitle?: string
  subTitle?: string
  colorSubTitle?: string
  bgImageUrl?: string
  bgColor?: string
}

const HeroSmall = ({
  alignText,
  classComponent,
  title,
  colorTitle,
  subTitle,
  colorSubTitle,
  bgImageUrl,
  bgColor
}: Props) => (
  <S.Wrapper className={classComponent}>
    <S.HeroSmallWrapper
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      className={`${bgColor && `bg-${bgColor}`}`}
    >
      <div className={`container ${alignText && `text-${alignText}`}`}>
        <S.SubTitle className={colorSubTitle && `text-${colorSubTitle}`}>
          {subTitle}
        </S.SubTitle>
        <S.Title className={colorTitle && `text-${colorTitle}`}>
          {title}
        </S.Title>
      </div>
    </S.HeroSmallWrapper>
  </S.Wrapper>
)

export default HeroSmall
