import { styled } from 'styled-components'

export const Hero = styled.section`
  display: flex;

  gap: 3.5rem;
  padding: 5.75rem 0;

  .slogan {
    display: flex;
    flex-direction: column;
    width: 36.75rem;
    gap: 1rem;
  }

  img {
    height: 22.5rem;
    width: 29.75rem;
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;
`

interface StrengthProps {
  variant: string
}

export const Strength = styled.div<StrengthProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;

    ${(props) => `background-color: ${props.theme[props.variant]}`}
  }
`

export const CoffeeList = styled.section`
  h2 {
    margin-top: 2rem;
    margin-bottom: 3.375rem;
  }
`

export const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 2rem;
  row-gap: 2.5rem;
`
