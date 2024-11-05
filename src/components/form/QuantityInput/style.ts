import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 4.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-title']};
  padding: 0.53125rem 0.5rem;

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }

  button svg {
    color: ${(props) => props.theme.purple};
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
