import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'

/* eslint-disable import/no-absolute-path */
import MotoboyIllustration from '/images/motoboyIllustration.svg'
import { Header } from '../../components/header'
import { Container, Summary, SummaryDetails, Info } from './style'

const infos = [
  {
    icon: <MapPin color="white" weight="fill" />,
    text1: (
      <span>
        Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
      </span>
    ),
    text2: 'Farrapos - Porto Alegre, RS',
    bgColor: 'purple',
  },
  {
    icon: <Timer color="white" weight="fill" />,
    text1: 'Previsão de entrega',
    text2: <strong>20 min - 30 min</strong>,
    bgColor: 'yellow',
  },
  {
    icon: <CurrencyDollar color="white" weight="fill" />,
    text1: 'Pagamento na entrega',
    text2: <strong>Cartão de Crédito</strong>,
    bgColor: 'yellow-dark',
  },
]

export function Success() {
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <h1 className="titleL">Uhu! Pedido confirmado</h1>
          <span className="textL">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </div>

        <Summary>
          <SummaryDetails>
            {infos.map((info) => (
              <Info key={info.bgColor} $variant={info.bgColor}>
                <div className="infoIcon">{info.icon}</div>
                <div className="infoTexts">
                  <span className="textM">{info.text1}</span>
                  <span className="textM">{info.text2}</span>
                </div>
              </Info>
            ))}
          </SummaryDetails>
          <img src={MotoboyIllustration} alt="Motoboy Illustration" />
        </Summary>
      </Container>
    </>
  )
}
