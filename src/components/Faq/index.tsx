import * as S from './styles'
import { AngleRight } from '@styled-icons/fa-solid/AngleRight'

import faq from './content'

type Props = {
  classComponent?: string
  title?: string
}

const Faq = ({ classComponent, title }: Props) => (
  <S.Wrapper className={classComponent}>
    <h1>{title}</h1>
    <S.Divider className="my-4" />

    <div className="accordion" id="accordionFaq">
      {faq.map(({ titleItem, text }, index) => (
        <>
          <S.FaqCard className="card">
            <S.FaqCardHeader className="card-header" id={`heading${index}`}>
              <S.CardTitle className="mb-0">
                <button
                  className={`btn btn-link btn-block text-left ${
                    index == 0 ? '' : 'collapsed'
                  }`}
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${index}`}
                  aria-expanded={index == 0 ? true : false}
                  aria-controls={`collapse${index}`}
                >
                  <AngleRight width="11" className="mr-2" aria-hidden="true" />{' '}
                  {titleItem}
                </button>
              </S.CardTitle>
            </S.FaqCardHeader>

            <div
              id={`collapse${index}`}
              className={`collapse ${index == 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#accordionFaq"
            >
              <S.CardBody className="card-body">{text}</S.CardBody>
            </div>
          </S.FaqCard>
        </>
      ))}
    </div>
  </S.Wrapper>
)

export default Faq
