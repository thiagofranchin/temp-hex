import styled from 'styled-components'

// interface NavLinkWrapperProps {
//   activeBtnColor?: string
// }

export const Wrapper = styled.main`
  .tab-content > .tab-pane {
    z-index: 0;

    &.active {
      z-index: 1;
    }
  }
  .nav-link {
    border-radius: 0 20px 0 20px;
    border-bottom-width: 1px;
    border-bottom-style: dotted;
    border-color: gray;
    margin-bottom: 3px;
    width: 100%;

    svg {
      margin-top: -2px;
    }
  }
  .image-item {
    img {
      border-radius: 15px;
      border-style: inset;
      border-block-style: none;
      border-width: 6px;
      display: block;
      margin: 0 auto 30px;
      max-width: 100%;
    }
  }
`
