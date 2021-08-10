import * as S from './styles'
import { AngleLeft } from '@styled-icons/fa-solid/AngleLeft'
import { AngleRight } from '@styled-icons/fa-solid/AngleRight'

import carousel from './content'

const Carousel = () => {
  const carouselLength = carousel.length

  const dots = []
  for (let i = 0; i < carouselLength; i++) {
    dots.push(
      <li
        key={i}
        data-target="#carouselExampleCaptions"
        data-slide-to={i}
        className={`${i == 0 && 'active'}`}
      ></li>
    )
  }

  return (
    <S.Wrapper>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        {carouselLength > 1 && <ol className="carousel-indicators">{dots}</ol>}

        <div className="carousel-inner">
          {carousel.map(({ title, text, imageUrl, labelButton }, index) => (
            <div
              className={`carousel-item ${index == 0 && 'active'}`}
              key={index}
            >
              <img src={imageUrl} className="d-block w-100" alt="..." />
              <S.CarouselContent className="carousel-caption d-none d-md-block text-left">
                {title && (
                  <S.CarouselContentTitle className="w-50">
                    {title}
                  </S.CarouselContentTitle>
                )}

                {text && (
                  <S.CarouselContentBody className="w-50">
                    {text}
                  </S.CarouselContentBody>
                )}

                {labelButton && (
                  <button className="btn btn-primary">{labelButton}</button>
                )}
              </S.CarouselContent>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        {carouselLength > 1 && (
          <>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <AngleLeft width="25" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <AngleRight width="25" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </>
        )}
      </div>
    </S.Wrapper>
  )
}

export default Carousel
