import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import { Hero, Info, Strength, CoffeeList, CoffeeGrid } from './style'
import { Card } from '../../components/card'
import HeroImage from '/images/hero.svg'
import { coffees } from '../../../data.json'

const strengths = [
  {
    icon: <ShoppingCart color="white" weight="fill" />,
    text: 'Compra simples e segura',
    variant: 'yellow-dark',
  },
  {
    icon: <Package color="white" weight="fill" />,
    text: 'Embalagem mantém o café intacto',
    variant: 'base-text',
  },
  {
    icon: <Timer color="white" weight="fill" />,
    text: 'Entrega rápida e rastreada',
    variant: 'yellow',
  },
  {
    icon: <Coffee color="white" weight="fill" />,
    text: 'O café chega fresquinho até você',
    variant: 'purple',
  },
]

export function Home() {
  return (
    <div>
      <Hero>
        <section>
          <div className="slogan">
            <h1 className="titleXL">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <span className="textL">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>

          <Info>
            {strengths.map((strength) => (
              <Strength key={strength.text} variant={strength.variant}>
                <div>{strength.icon}</div>
                <span className="textM">{strength.text}</span>
              </Strength>
            ))}
          </Info>
        </section>

        <img src={HeroImage} alt="Logo image" />
      </Hero>

      <CoffeeList>
        <h2 className="titleL">Nossos cafés</h2>

        <CoffeeGrid>
          {coffees.map((coffee) => {
            return <Card key={coffee.title} coffee={coffee} />
          })}
        </CoffeeGrid>
      </CoffeeList>
    </div>
  )
}
