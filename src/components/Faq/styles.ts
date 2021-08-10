import styled from 'styled-components'

export const Wrapper = styled.main``
export const FaqCard = styled.div`
  border: none;
`

export const FaqCardHeader = styled.div`
  background: white;
  padding-left: 0;

  button {
    font-weight: 600;

    &:focus {
      box-shadow: 0 0 0 0 transparent;
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
    }

    svg {
      transform: rotate(90deg);
      transition: all 0.5s ease;
    }

    &.collapsed {
      svg {
        transform: rotate(0deg);
      }
    }
  }
`

export const CardTitle = styled.h2`
  button {
    font-size: 20px;
  }
`

export const CardBody = styled.div`
  background-color: #eef5f4;
  padding-left: 35px;
  padding-right: 35px;
`

export const Divider = styled.div`
  border-top: 1px solid #222222;
  height: 0px;
  width: 100px;
`
