import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  img {
    display: flex;
    align-self: center;
    position: absolute;

    width: 7.5rem;
    height: 7.5rem;
    top: -1.4rem;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.3125rem;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Roboto';
    margin-top: 7rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    border-radius: 100px;
  }
`

export const Description = styled.span`
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  margin: 0.5rem 1.25rem;
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5625rem 0 1.25rem 0;
  gap: 1.4375rem;
  width: 13rem;
  height: 2.375rem;
`

export const Price = styled.div`
  flex: 1;
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.375rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['purple-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    width: 2.375rem;
    border: none;
    cursor: pointer;
  }

  button.shoppingCart:hover {
    background-color: ${(props) => props.theme.purple};
    transition: background-color 3ms;
  }
`
