import Container from '../Container'
import * as S from './styles'

type Props = {
  bgColor?: string
  classComponent?: string
  contentIsFluid?: boolean
  titleSection?: string
  subTitleSection?: string
  urlImageCard1?: string
  urlImageCard2?: string
  urlImageCard3?: string
  altImageCard1?: string
  altImageCard2?: string
  altImageCard3?: string
  sizeImageCard1?: string
  sizeImageCard2?: string
  sizeImageCard3?: string
  titleCard1?: string
  titleCard2?: string
  titleCard3?: string
  textCard1?: string
  textCard2?: string
  textCard3?: string
}

const CardRow = ({
  bgColor,
  classComponent,
  contentIsFluid,
  titleSection,
  subTitleSection,
  urlImageCard1,
  urlImageCard2,
  urlImageCard3,
  altImageCard1,
  altImageCard2,
  altImageCard3,
  sizeImageCard1,
  sizeImageCard2,
  sizeImageCard3,
  titleCard1,
  titleCard2,
  titleCard3,
  textCard1,
  textCard2,
  textCard3
}: Props) => (
  <div className={bgColor ? `bg-${bgColor}` : 'bg-transparent'}>
    <Container
      isFluid={contentIsFluid ? contentIsFluid : false}
      classContainer={classComponent}
    >
      <S.CardRowHeader className={`col-md-12`}>
        <S.CardRowTitle>{titleSection}</S.CardRowTitle>
        <S.Divider />
        <S.CardRowParagraph>{subTitleSection}</S.CardRowParagraph>
      </S.CardRowHeader>

      <S.CardRowColumnWrapper className="col-md-4">
        <S.CardWrapper
          className={`card ${bgColor ? `bg-${bgColor}` : 'bg-transparent'}`}
        >
          <img
            src={urlImageCard1}
            className={`card-img-top w-${sizeImageCard1}`}
            alt={altImageCard1}
          />
          <div className="card-body">
            <h5 className="card-title">{titleCard1}</h5>
            <p className="card-text">{textCard1}</p>
          </div>
        </S.CardWrapper>
      </S.CardRowColumnWrapper>
      <S.CardRowColumnWrapper className="col-md-4">
        <S.CardWrapper
          className={`card ${bgColor ? `bg-${bgColor}` : 'bg-transparent'}`}
        >
          <img
            src={urlImageCard2}
            className={`card-img-top w-${sizeImageCard2}`}
            alt={altImageCard2}
          />
          <div className="card-body">
            <h5 className="card-title">{titleCard2}</h5>
            <p className="card-text">{textCard2}</p>
          </div>
        </S.CardWrapper>
      </S.CardRowColumnWrapper>
      <S.CardRowColumnWrapper className="col-md-4">
        <S.CardWrapper
          className={`card ${bgColor ? `bg-${bgColor}` : 'bg-transparent'}`}
        >
          <img
            src={urlImageCard3}
            className={`card-img-top w-${sizeImageCard3}`}
            alt={altImageCard3}
          />
          <div className="card-body">
            <h5 className="card-title">{titleCard3}</h5>
            <p className="card-text">{textCard3}</p>
          </div>
        </S.CardWrapper>
      </S.CardRowColumnWrapper>
    </Container>
  </div>
)

export default CardRow
