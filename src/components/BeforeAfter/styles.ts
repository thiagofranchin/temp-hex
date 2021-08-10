import styled from 'styled-components'

export const Wrapper = styled.main``
export const CardImageOverlayWrapper = styled.div`
  pointer-events: none;

  span {
    font-size: 16px;
    left: 50%;
    padding: 7px 15px;
    position: absolute;
    top: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`

export const CardWrapper = styled.div`
  border-radius: 12px;
  border-width: 6px;
  border-style: inset;
  border-block-style: none;
`

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

export const CardRowTitle = styled.h2`
  text-align: center;
`

export const CardRowContent = styled.div`
  margin-top: -15px;
  z-index: -1;
  box-shadow: inset 0px 70px 75px -45px #dedede;

  .card-text {
    margin-top: 30px;
  }
`

export const Divider = styled.div`
  border-top: 1px solid #222222;
  height: 0px;
  margin: 35px auto;
  width: 100px;
`

export const CardRowParagraph = styled.p`
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`
