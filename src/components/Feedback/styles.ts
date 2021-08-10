import styled from 'styled-components'

export const Wrapper = styled.main`
  background-size: cover;
  background-color: #000;
  padding: 50px 0 30px 0;
`

export const Divider = styled.div`
  border-top: 1px solid white;
  height: 0px;
  margin: 35px 0;
  width: 100px;
`
export const CarouselContent = styled.div`
  bottom: auto;
  position: initial;
  padding-top: 0;

  .card {
    background: transparent;
  }
`
export const CarouselContentTitle = styled.h2`
  color: white;
  border-left: 5px solid #15b1d7;
  padding-left: 20px;
`
export const CarouselContentBody = styled.p`
  color: white;
`

export const FeedbackText = styled.p`
  padding: 20px;
  border: 1px solid white;
  border-style: dotted;
  font-size: 14px;
  margin-top: 15px;
  font-style: italic;

  &::before {
    content: '"';
  }

  &::after {
    content: '"';
  }
`
