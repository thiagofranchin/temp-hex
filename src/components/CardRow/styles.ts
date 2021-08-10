import styled from 'styled-components'

export const CardRowHeader = styled.div`
  padding-bottom: 50px;

  @media (min-width: 768px) {
    p {
      padding: 0 100px;
    }
  }

  @media (min-width: 992px) {
    p {
      padding: 0 200px;
    }
  }
`

export const CardRowColumnWrapper = styled.div`
  @media (max-width: 767.98px) {
    margin-bottom: 55px;
  }
`
export const CardRowTitle = styled.h3`
  text-align: center;
`

export const Divider = styled.div`
  border-top: 1px solid #222222;
  height: 0px;
  margin: 35px auto;
  width: 100px;
`

export const CardRowParagraph = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`
export const CardWrapper = styled.div`
  border: none;

  h5,
  p {
    text-align: center;
  }

  img {
    margin: 0 auto;
  }
`
