import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;

  gap: 0.75rem;
  height: 2.375rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  a {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
    height: 100%;
    text-decoration: none;

    position: relative;

    span {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['yellow-dark']};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`

export const Badge = styled.div`
  display: flex;
  align-items: center;

  border-radius: 6px;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};
  }
`
