import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div.container {
    margin-top: 5rem;
    margin-bottom: 2.5rem;
    gap: 0.25rem;
  }

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 420px) {
    padding: 2rem;
  }
`

export const Summary = styled.section`
  display: flex;
  align-items: center;
  gap: 6.375rem;
  padding: 1.75rem 0;

  img {
    height: 18.3125rem;
    width: 30.75rem;
  }

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`

export const SummaryDetails = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #dbac2c, #8047f8);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 2.5rem;
  height: 100%;
  width: 32.875rem;
  gap: 2rem;
`

interface InfoProps {
  $variant: string
}

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div.infoIcon {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;

    ${(props) => `background-color: ${props.theme[props.$variant]}`}
  }

  div.infoTexts {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme['base-text']};
  }
`
