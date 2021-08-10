import styled from 'styled-components'

export const Wrapper = styled.main``

export const LogoWrapper = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
`
