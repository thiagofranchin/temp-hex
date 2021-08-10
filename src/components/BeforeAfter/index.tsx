import Container from '../Container'
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'

import * as S from './styles'

import beforeAfter from './content'

type Props = {
  badgeColor?: string
  bgColor?: string
  borderColor?: string
  classComponent?: string
  contentIsFluid?: boolean
  positionLine?: number
  subTitleSection?: string
  titleSection?: string
}

const BeforeAfter = ({
  badgeColor,
  bgColor,
  borderColor,
  classComponent,
  contentIsFluid,
  positionLine,
  subTitleSection,
  titleSection
}: Props) => (
  <S.Wrapper
    className={`before-after ${classComponent} ${
      bgColor ? `bg-${bgColor}` : 'bg-transparent'
    }`}
  >
    <Container isFluid={contentIsFluid ? contentIsFluid : false}>
      <S.CardRowHeader className={`col-md-12`}>
        {titleSection && (
          <>
            <S.CardRowTitle>{titleSection}</S.CardRowTitle>
            <S.Divider />
          </>
        )}
        {subTitleSection && (
          <S.CardRowParagraph>{subTitleSection}</S.CardRowParagraph>
        )}
      </S.CardRowHeader>
      <>
        {beforeAfter.map(
          ({ category, imageUrl1, imageUrl2, textContent }, index) => (
            <div className="col-md-4 mb-5 mb-md-0" key={index}>
              <S.CardWrapper
                className={`card ${
                  borderColor ? `border-${borderColor}` : 'border-primary'
                } `}
              >
                <ReactCompareSlider
                  className="card-img"
                  position={positionLine}
                  itemOne={
                    <ReactCompareSliderImage src={imageUrl1} alt="Image one" />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={imageUrl2} alt="Image two" />
                  }
                />
                <S.CardImageOverlayWrapper className="card-img-overlay">
                  <span
                    className={`card-title badge badge-pill ${
                      badgeColor ? `badge-${badgeColor}` : 'badge-primary'
                    } `}
                  >
                    {category}
                  </span>
                </S.CardImageOverlayWrapper>
              </S.CardWrapper>
              {textContent && (
                <S.CardRowContent className="card">
                  <div className="card-body">
                    <p className="card-text">{textContent}</p>
                  </div>
                </S.CardRowContent>
              )}
            </div>
          )
        )}
      </>
    </Container>
  </S.Wrapper>
)

export default BeforeAfter
