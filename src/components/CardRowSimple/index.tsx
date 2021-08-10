import Container from '../Container'
import * as S from './styles'

type Props = {
  bgColor?: string
  classComponent?: string
  cardLeftUrlImage?: string
  cardLeftAltImage?: string
  cardLeftTitle?: string
  cardLeftText?: string
  cardRightUrlImage?: string
  cardRightAltImage?: string
  cardRightTitle?: string
  cardRightText?: string
  contentIsFluid?: boolean
}

const CardRowSimple = ({
  bgColor,
  classComponent,
  cardLeftUrlImage,
  cardLeftAltImage,
  cardLeftTitle,
  cardLeftText,
  cardRightUrlImage,
  cardRightAltImage,
  cardRightTitle,
  cardRightText,
  contentIsFluid
}: Props) => (
  <div className={bgColor ? `bg-${bgColor}` : 'bg-transparent'}>
    <Container
      isFluid={contentIsFluid ? contentIsFluid : false}
      classContainer={classComponent}
    >
      <div className="col-md-6">
        <S.Wrapper>
          <div className="row no-gutters position-relative">
            <div className="col-md-6 p-md-4">
              <img
                src={cardLeftUrlImage}
                className="w-100"
                alt={cardLeftAltImage}
              />
            </div>
            <div className="col-md-6 position-static p-4 pl-md-0 text-center text-lg-left">
              <S.TitleCard className="mt-0">{cardLeftTitle}</S.TitleCard>
              <p>{cardLeftText}</p>
            </div>
          </div>
        </S.Wrapper>
      </div>
      <div className="col-md-6">
        <S.Wrapper>
          <div className="row no-gutters position-relative">
            <div className="col-md-6 p-md-4">
              <img
                src={cardRightUrlImage}
                className="w-100"
                alt={cardRightAltImage}
              />
            </div>
            <div className="col-md-6 position-static p-4 pl-md-0 text-center text-lg-left">
              <S.TitleCard className="mt-0">{cardRightTitle}</S.TitleCard>
              <p>{cardRightText}</p>
            </div>
          </div>
        </S.Wrapper>
      </div>
    </Container>
  </div>
)

export default CardRowSimple
