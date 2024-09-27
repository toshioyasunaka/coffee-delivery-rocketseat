import { ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { Container, Tags, Description, Control, Price, Order } from './style'
import { QuantityInput } from '../form/QuantityInput/index'

type CardProps = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  const theme = useTheme()

  return (
    <Container>
      <img src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </Tags>

      <span className="titleS">{coffee.title}</span>
      <Description className="textS">{coffee.description}</Description>

      <Control>
        <Price className="textS">
          R$ <span className="titleM">{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput />
          <button className="shoppingCart">
            <ShoppingCart size={22} weight="fill" color={theme['base-card']} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
