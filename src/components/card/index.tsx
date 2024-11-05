import { ShoppingCart, CheckFat } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'

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
  const [useCheckIcon, setUseCheckIcon] = useState(false)

  function changeIcon() {
    setUseCheckIcon(true)
  }

  useEffect(() => {
    let timeout: number

    if (useCheckIcon) {
      timeout = Number(
        setTimeout(() => {
          setUseCheckIcon(false)
        }, 1000),
      )
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [useCheckIcon])

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
          <button
            className={useCheckIcon ? 'checkIcon' : 'shoppingCart'}
            onClick={changeIcon}
          >
            {useCheckIcon ? (
              <CheckFat size={22} weight="fill" color={theme['base-card']} />
            ) : (
              <ShoppingCart
                size={22}
                weight="fill"
                color={theme['base-card']}
              />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  )
}
