import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 4.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['base-title']};
  gap: 0.25rem;
  padding: 0.53125rem 0.5rem;

  button {
    background-color: transparent;
    padding: 0;
  }
`
