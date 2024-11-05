import { styled } from 'styled-components'

export const CheckOut = styled.main`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
  gap: 0.75rem;

  @media (max-width: 420px) {
    padding: 2rem;
  }
`

export const AddressAndCart = styled.section`
  display: flex;
  margin-bottom: 0.1875rem;
  gap: 2rem;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    margin-bottom: 0.1875rem;
  }
`

export const Cart = styled.section`
  width: 28rem;
`

export const Card = styled.div`
  width: 40rem;
  padding: 2.5rem;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  &.cart {
    width: 100%;
    margin-top: 0.9375rem;
    border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
    padding: 2.5rem;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 6px;
  margin-bottom: 2rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: 2.625rem;
  row-gap: 1rem;
  column-gap: 0.75rem;

  input {
    border-radius: 4px;
    height: 2.625rem;
    padding: 0.75rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    outline: none;
    color: ${(props) => props.theme['base-text']};
  }

  input:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'district city uf';

  #cep {
    grid-area: cep;
  }

  #street {
    grid-area: street;
  }

  #number {
    grid-area: number;
  }

  #complement {
    grid-area: complement;
  }

  #district {
    grid-area: district;
  }

  #city {
    grid-area: city;
  }

  #uf {
    grid-area: uf;
  }
`
export const PaymentRadios = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 35rem;
  gap: 0.75rem;
`
