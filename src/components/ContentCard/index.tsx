import Container from '../Container'
import { DoubleArrow } from '@styled-icons/material-rounded/DoubleArrow'

import * as S from './styles'

type Props = {
  eyebrow?: string
  eyebrowLinkColor?: string
  title?: string
  text?: string
  alignText?: string
  bgColor?: string
  borderColorImage?: string
  textColor?: string
  classContainer?: string
  contentIsFluid?: boolean
  urlImgTopic1?: string
  altImgTopic1?: string
  textTopic1?: string
  urlImgTopic2?: string
  altImgTopic2?: string
  textTopic2?: string
  urlImage?: string
  altImage?: string
  linkText?: string
  linkUrl?: string
}

const ContentCard = ({
  eyebrow,
  eyebrowLinkColor,
  title,
  text,
  alignText,
  bgColor,
  borderColorImage,
  contentIsFluid,
  textColor,
  classContainer,
  urlImage,
  altImage,
  urlImgTopic1,
  altImgTopic1,
  textTopic1,
  urlImgTopic2,
  altImgTopic2,
  textTopic2,
  linkText,
  linkUrl
}: Props) => (
  <div className={bgColor ? `bg-${bgColor}` : 'bg-transparent'}>
    <Container
      isFluid={contentIsFluid ? contentIsFluid : false}
      classContainer={classContainer}
    >
      <S.ContentCardWrapper
        className={`jumbotron
      ${bgColor ? `bg-${bgColor}` : 'bg-transparent'}
      ${textColor ? `text-${textColor}` : ''}
    `}
      >
        <S.ContentCardRowWrapper
          className={`d-flex row
      ${alignText == 'right' ? 'flex-row' : 'flex-row-reverse'}`}
        >
          {urlImage && (
            <S.ContentCardColumnWrapper className="col-lg-6 content-card-img">
              <img
                src={urlImage}
                alt={altImage}
                className={`w-100 ${
                  borderColorImage
                    ? `border-${borderColorImage}`
                    : 'border-primary'
                }`}
              />
            </S.ContentCardColumnWrapper>
          )}
          <S.ContentCardColumnWrapper
            className={urlImage ? 'col-lg-6' : 'col-lg-12'}
          >
            {eyebrow && (
              <S.ContentCardEyeBrow
                className={`${
                  eyebrowLinkColor ? `text-${eyebrowLinkColor}` : ''
                } text-center text-lg-left py-4 py-lg-0`}
              >
                <small
                  className={`bor-header ${
                    eyebrowLinkColor ? `bg-${eyebrowLinkColor}` : ''
                  }`}
                ></small>
                {eyebrow}
                <small
                  className={`bor-header bor-right ${
                    eyebrowLinkColor ? `bg-${eyebrowLinkColor}` : ''
                  }`}
                ></small>
              </S.ContentCardEyeBrow>
            )}
            {title && (
              <h2 className="content-card-title text-center text-lg-left pt-lg-2 pb-lg-1">
                {title}
              </h2>
            )}
            {text && (
              <p className="content-card-text text-center text-lg-left py-4 pt-lg-1">
                {text}
              </p>
            )}
            {(urlImgTopic1 || textTopic1) && (
              <S.ContentCardTextList className="content-card-text-list">
                {urlImgTopic1 && (
                  <img
                    src={urlImgTopic1}
                    alt={altImgTopic1}
                    className="svg-primary"
                  />
                )}

                {textTopic1 && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${textTopic1}`
                    }}
                  ></p>
                )}
              </S.ContentCardTextList>
            )}
            {(urlImgTopic2 || textTopic2) && (
              <S.ContentCardTextList className="content-card-text-list">
                {urlImgTopic2 && (
                  <img
                    src={urlImgTopic2}
                    alt={altImgTopic2}
                    className="svg-primary"
                  />
                )}

                {textTopic2 && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${textTopic2}`
                    }}
                  ></p>
                )}
              </S.ContentCardTextList>
            )}
            {linkUrl && (
              <S.ContentCardLink
                className={`content-card-link ${
                  eyebrowLinkColor ? `text-${eyebrowLinkColor}` : ''
                }`}
                href={linkUrl}
              >
                {linkText}
                <DoubleArrow width="18" aria-hidden="true" />
              </S.ContentCardLink>
            )}
          </S.ContentCardColumnWrapper>
        </S.ContentCardRowWrapper>
      </S.ContentCardWrapper>
    </Container>
  </div>
)

export default ContentCard
