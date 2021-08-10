import * as S from './styles'

import feedbackItems from './content'

type Props = {
  classComponent?: string
  bgImageUrl?: string
  title?: string
  text?: string
}

const Feedback = ({ classComponent, bgImageUrl, title, text }: Props) => {
  const feedbackLength = feedbackItems.length

  const dots = []
  for (let i = 0; i < feedbackLength; i++) {
    dots.push(
      <li
        key={i}
        data-target="#feedbackExampleCaptions"
        data-slide-to={i}
        className={`${i == 0 && 'active'}`}
      ></li>
    )
  }
  return (
    <S.Wrapper
      className={classComponent}
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-white">{title}</h2>
            <S.Divider />
            <p className="text-white">{text}</p>
          </div>
          <div className="col-sm-6">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              {feedbackLength > 1 && (
                <ol className="carousel-indicators">{dots}</ol>
              )}

              <div className="carousel-inner">
                {feedbackItems.map(
                  ({ name, feedbackText, role, profileImageUrl }, index) => (
                    <div
                      className={`carousel-item ${index == 0 && 'active'}`}
                      key={index}
                    >
                      <S.CarouselContent className="carousel-caption d-block text-left">
                        <div className="card mb-3 border-0">
                          <div className="row no-gutters">
                            <div className="col-md-3">
                              <img
                                src={profileImageUrl}
                                className="card-img"
                                alt="..."
                              />
                            </div>
                            <div className="col-md-9 text-center text-md-left">
                              <div className="card-body">
                                {name && (
                                  <h5 className="card-title text-white">
                                    {name}
                                  </h5>
                                )}
                                {role && (
                                  <p className="card-text text-white">{role}</p>
                                )}
                              </div>
                            </div>
                            {feedbackText && (
                              <div className="col-12 text-white">
                                <S.FeedbackText>{feedbackText}</S.FeedbackText>
                              </div>
                            )}
                          </div>
                        </div>
                      </S.CarouselContent>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Feedback
