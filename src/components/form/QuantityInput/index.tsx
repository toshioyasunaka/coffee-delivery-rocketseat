import { useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'

import { Container } from './style.ts'

export function QuantityInput() {
  const [quantity, setQuantity] = useState<number>(1)

  return (
    <Container className="textM">
      <button onClick={() => setQuantity(quantity - 1)}>
        <Minus size={14} />
      </button>

      <span className="textM">{quantity}</span>

      <button onClick={() => setQuantity(quantity + 1)}>
        <Plus size={14} />
      </button>
    </Container>
  )
}
