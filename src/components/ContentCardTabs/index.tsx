import Container from '../Container'
import * as S from './styles'
import { AngleRight } from '@styled-icons/fa-solid/AngleRight'

import contentCardTabs from './content'

type ContentCardTabsProps = {
  classComponent?: string
  bgColor?: string
  contentIsFluid?: boolean
  borderColor?: string
  labelButtonColor?: string
}

const ContentCardTabs = ({
  classComponent,
  bgColor,
  contentIsFluid,
  borderColor,
  labelButtonColor
}: ContentCardTabsProps) => (
  <S.Wrapper
    className={`content-card-tabs ${classComponent} ${
      bgColor ? `bg-${bgColor}` : 'bg-transparent'
    }`}
  >
    <Container isFluid={contentIsFluid ? contentIsFluid : false}>
      <div className="col-md-9">
        <div className="tab-content" id="v-pills-tabContent">
          {contentCardTabs.map(({ imageUrl, text }, index) => (
            <div
              key={index}
              className={`tab-pane fade ${index == 0 && 'show active'}`}
              id={`v-pills-${index}`}
              role="tabpanel"
              aria-labelledby={`v-pills-${index}-tab`}
            >
              <div className="row">
                <div className="col-lg-4 image-item">
                  <img
                    src={imageUrl}
                    className={
                      borderColor ? `border-${borderColor}` : 'border-primary'
                    }
                    alt=""
                  />
                </div>
                <div className="col-lg-8">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${text}`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-3">
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {contentCardTabs.map(({ labelButton }, index) => (
            <a
              key={index}
              className={`nav-link ${
                labelButtonColor && `text-${labelButtonColor}`
              } ${index == 0 && `active`}`}
              id={`v-pills-${index}-tab`}
              data-toggle="pill"
              href={`#v-pills-${index}`}
              role="tab"
              aria-controls={`v-pills-${index}`}
              aria-selected={index == 0 ? 'true' : 'false'}
            >
              <AngleRight width="8" className="mr-2" /> {labelButton}
            </a>
          ))}
        </div>
      </div>
    </Container>
  </S.Wrapper>
)

export default ContentCardTabs
