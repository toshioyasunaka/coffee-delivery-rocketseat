import styled from 'styled-components'

export const Radio = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  gap: 0.75rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid transparent;
  cursor: pointer;

  input[type='radio'] {
    display: none;
    visibility: hidden;
  }

  &.checked {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['base-text']};
    border: ${(props) => '1px solid ' + props.theme.purple};
  }
`
