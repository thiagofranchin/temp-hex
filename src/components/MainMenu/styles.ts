import styled from 'styled-components'

interface MenuButtonProps {
  bgColorLink?: string
}

export const Wrapper = styled.main``

export const MenuButton = styled.li`
  &.active {
    box-shadow: inset 0px -18px 44px ${(props: MenuButtonProps) => (props.bgColorLink ? props.bgColorLink : '#15b1d742')};
    border-radius: 10px 0px;

    a {
      font-weight: bold;
    }

    @media (max-width: 767.98px) {
      box-shadow: inset 5px 0px 0px
        ${(props: MenuButtonProps) =>
          props.bgColorLink ? props.bgColorLink : '#15b1d7'};
      border-radius: 0;
    }
  }
  a {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;

    @media (max-width: 767.98px) {
      &.nav-link {
        padding-left: 15px;

        &:hover {
          box-shadow: inset 5px 0px 0px
            ${(props: MenuButtonProps) =>
              props.bgColorLink ? props.bgColorLink : '#15b1d7'};
        }
      }
    }
  }
`
