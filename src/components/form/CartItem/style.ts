import { styled } from 'styled-components'

export const Cart = styled.aside`
  display: flex;
  flex-direction: column;

  hr {
    border: none;
    border-top: 1px solid ${(props) => props.theme['base-button']};
    margin: 1.5rem 0;
  }
`
export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    transition: background-color 0.3s;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5rem;
  padding: 0.5rem 0.25rem;

  img {
    height: 4rem;
    width: 4rem;
  }

  div.quantity {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div.itemAndQuantity {
      display: flex;
      gap: 0.5rem;
    }
  }

  span.price {
    font-weight: bold;
  }
`

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  div.textL {
    font-weight: bold;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    width: 23rem;
    height: 2.875rem;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    margin-top: 0.75rem;
  }

  button:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition: background-color 0.3s;
  }
`
