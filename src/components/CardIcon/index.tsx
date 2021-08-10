import { Clock } from '@styled-icons/bootstrap/Clock'
import { TelephoneFill } from '@styled-icons/bootstrap/TelephoneFill'
import { MessageRoundedDetail } from '@styled-icons/boxicons-regular/MessageRoundedDetail'

import * as S from './styles'

type Props = {
  classComponent?: string
  cardLeftTitle?: string
  cardLeftText?: string
  cardRightTitle?: string
  cardRightText?: string
  colorIcon?: string
  sizeIcon?: number
  numberWhatsapp?: number
  textWhatsapp?: string
}

const CardIcon = ({
  classComponent,
  cardLeftTitle,
  cardLeftText,
  cardRightTitle,
  cardRightText,
  colorIcon,
  sizeIcon = 40,
  numberWhatsapp = 5519991179535,
  textWhatsapp = 'Welcome the J. Sousa Cleaning Service. Leave a message and we will reply as soon as possible.'
}: Props) => (
  <>
    <div className="col-6">
      <S.Wrapper className={`${classComponent} card-icon`}>
        <div className="row no-gutters position-relative">
          <div
            className={`col-icon p-md-3 d-flex align-items-center ${
              colorIcon && `text-${colorIcon}`
            }`}
          >
            <Clock width={sizeIcon} />
          </div>
          <div className="col-text position-static py-4 pl-md-0 d-flex align-items-center">
            <div>
              <S.TitleCard className="mt-0">{cardLeftTitle}</S.TitleCard>
              <S.TextCard>{cardLeftText}</S.TextCard>
            </div>
          </div>
        </div>
      </S.Wrapper>
    </div>
    <div className="col-6">
      <S.Wrapper className={`${classComponent} card-icon`}>
        <div className="row no-gutters position-relative">
          <div
            className={`col-icon p-md-3 d-flex align-items-center ${
              colorIcon && `text-${colorIcon}`
            }`}
          >
            <TelephoneFill width={sizeIcon} color={colorIcon} />
          </div>
          <div className="col-text position-static py-4 pl-md-0 d-flex align-items-center">
            <div>
              <S.TitleCard className="mt-0">
                {cardRightTitle && cardRightTitle}
              </S.TitleCard>
              <a
                href={`https://api.whatsapp.com/send?phone=${numberWhatsapp}${
                  textWhatsapp && `&text=${textWhatsapp}`
                }`}
                target="_blank"
                rel="noreferrer"
              >
                <S.TextCard
                  className="text-dark"
                  title="Click to send a message"
                >
                  {cardRightText}
                  <MessageRoundedDetail
                    width="19"
                    className={`ml-1 ${colorIcon && `text-${colorIcon}`}`}
                  />
                </S.TextCard>
              </a>
            </div>
          </div>
        </div>
      </S.Wrapper>
    </div>
  </>
)

export default CardIcon
