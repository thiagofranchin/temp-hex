import Container from '../Container'
import * as S from './styles'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Phone } from '@styled-icons/boxicons-regular/Phone'
import { MessageRoundedDetail } from '@styled-icons/boxicons-regular/MessageRoundedDetail'
import { AngleLeft } from '@styled-icons/fa-solid/AngleLeft'
import { AngleRight } from '@styled-icons/fa-solid/AngleRight'
import { Clock } from '@styled-icons/bootstrap/Clock'
import { Telephone } from '@styled-icons/bootstrap/Telephone'
import { TelephoneFill } from '@styled-icons/bootstrap/TelephoneFill'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { DoubleArrow } from '@styled-icons/material-rounded/DoubleArrow'
import { Error } from '@styled-icons/boxicons-solid/Error'

type Props = {
  colorIcon?: string
}

const Icons = ({ colorIcon = '#28B0D1' }: Props) => (
  <S.Wrapper>
    <Container isFluid={true}>
      <div className="col-4">
        <table className="table table-bordered table-dark text-center">
          <tbody>
            <tr>
              <th scope="row">
                <FacebookSquare width="40" color={colorIcon} />
              </th>
              <td>
                <Instagram width="40" color={colorIcon} />
              </td>
              <td>
                <Phone width="40" color={colorIcon} />
              </td>
            </tr>
            <tr>
              <td scope="row">
                <MessageRoundedDetail width="40" color={colorIcon} />
              </td>
              <td>
                <AngleLeft width="25" color={colorIcon} />
              </td>
              <td>
                <AngleRight width="25" color={colorIcon} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Clock width="30" color={colorIcon} />
              </th>
              <td>
                <Telephone width="30" color={colorIcon} />
              </td>
              <td>
                <TelephoneFill width="30" color={colorIcon} />
              </td>
            </tr>
            <tr>
              <td scope="row">
                <Menu width="40" color={colorIcon} />
              </td>
              <td>
                <DoubleArrow width="40" color={colorIcon} />
              </td>
              <td>
                <Error width="40" color={colorIcon} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  </S.Wrapper>
)

export default Icons
