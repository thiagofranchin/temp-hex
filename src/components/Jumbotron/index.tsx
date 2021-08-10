import * as S from './styles'

type Props = {
  title?: string
  text?: string
  textAlign?: string
  bgColor?: string
  textColor?: string
  classContainer?: string
  contentIsFluid?: boolean
}

const Jumbotron = ({
  title,
  text,
  textAlign,
  bgColor,
  textColor,
  classContainer,
  contentIsFluid
}: Props) => (
  <S.JumbotronWrapper
    className={`jumbotron jumbotron-fluid
      ${bgColor && `bg-${bgColor}`}
      ${textColor && `text-${textColor}`}
    `}
  >
    <div
      className={`container${contentIsFluid ? '-fluid' : ''}
      ${textAlign && `text-${textAlign}`}
      ${classContainer}
      `}
    >
      <h1 className="display-4">{title}</h1>
      <p className="lead">{text}</p>
    </div>
  </S.JumbotronWrapper>
)

export default Jumbotron
