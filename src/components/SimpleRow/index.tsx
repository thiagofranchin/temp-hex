import Container from '../Container'
import * as S from './styles'

type SimpleRowProps = {
  contentIsFluid?: boolean
  classComponent?: string
  textAlign?: string
  text?: string
  textColor?: string
  bgColor?: string
  borderColor?: string
}

const SimpleRow = ({
  contentIsFluid,
  classComponent,
  textAlign,
  textColor,
  bgColor,
  borderColor,
  text
}: SimpleRowProps) => (
  <div
    className={`simple-row ${
      bgColor ? `bg-${bgColor}` : 'bg-super-dark'
    } border-top ${borderColor ? `border-${borderColor}` : 'border-primary'} `}
  >
    <Container
      isFluid={contentIsFluid ? contentIsFluid : false}
      classContainer={`${classComponent ? classComponent : ''}`}
    >
      <S.Wrapper className={`w-100`}>
        <p
          className={`px-4 ${textAlign ? `text-${textAlign}` : 'text-center'} ${
            textColor ? `text-${textColor}` : 'text-white'
          } mb-0`}
        >
          {text}
        </p>
      </S.Wrapper>
    </Container>
  </div>
)

export default SimpleRow
