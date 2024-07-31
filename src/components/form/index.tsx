import { useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { Container } from './style.ts'

export function QuantityInput() {
  const [quantity, setQuantity] = useState<number>(0)

  const theme = useTheme()

  return (
    <Container className="textM">
      <button onClick={() => setQuantity(quantity - 1)}>
        <Minus color={theme.purple} size={14} />
      </button>

      <span className="textM">{quantity}</span>

      <button onClick={() => setQuantity(quantity + 1)}>
        <Plus color={theme.purple} size={14} />
      </button>
    </Container>
  )
}
