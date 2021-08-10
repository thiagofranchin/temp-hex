import styled from 'styled-components'

export const CkeditorWrapper = styled.div`
  margin-bottom: 0;
`
export const CkeditorRowWrapper = styled.div``
export const CkeditorColumnWrapper = styled.div`
  @media (min-width: 768px) {
    .ckeditor-list-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .ckeditor-list {
    margin-bottom: 20px;
    display: flex;

    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
      align-self: center;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.5rem;
      align-self: center;
      margin-bottom: 0;
      text-align: left;
    }
  }
`
export const CkeditorEyeBrow = styled.span`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  line-height: 1em;
  margin-bottom: 15px;

  .bor-header {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    top: -3px;
    border-radius: 10px;
    height: 3px;
    width: 35px;

    &.bor-right {
      margin-right: 0;
      margin-left: 9px;
    }
  }
`
