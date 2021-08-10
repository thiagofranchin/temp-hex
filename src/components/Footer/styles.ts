import styled from 'styled-components'

export const Wrapper = styled.footer`
  .logo {
    display: inline-flex;
    max-width: 230px;
  }
`

export const MenuButton = styled.li`
  border-bottom: 1px solid;
  &.active {
    a {
      font-weight: bold;
    }
  }
`

export const TitleItem = styled.h4`
  color: #15b1d7;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 35px;
`
