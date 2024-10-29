import { Trash } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import { Cart, Container, TrashButton, CartSummary } from './style'
import { QuantityInput } from '../QuantityInput/index'
import { useTheme } from 'styled-components'

interface Coffees {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CartItemProps {
  coffees: Coffees[]
  submitOrder: () => void
}

export function CartItem({ coffees, submitOrder }: CartItemProps) {
  const theme = useTheme()

  const deliveryCost = 3.5

  const totalValueOfCartItems = coffees
    .reduce((acc, coffee) => acc + coffee.price, 0)
    .toFixed(2)

  const totalCartValue = parseFloat(totalValueOfCartItems) + deliveryCost

  function handleSubmit() {
    submitOrder()
  }

  return (
    <Cart>
      {coffees.map((coffee) => {
        return (
          <div key={coffee.id}>
            <Container className="textM">
              <img src={coffee.image} alt={coffee.title} />
              <div className="quantity">
                {coffee.title}
                <div className="itemAndQuantity">
                  <QuantityInput />
                  <TrashButton>
                    <Trash size={16} color={theme.purple} />
                    <span className="buttonM" color={theme['base-text']}>
                      REMOVER
                    </span>
                  </TrashButton>
                </div>
              </div>
              <span className="price">R$ {coffee.price.toFixed(2)}</span>
            </Container>

            <hr />
          </div>
        )
      })}

      <CartSummary>
        <div>
          <span className="textS">Total de itens</span>
          <span className="textM">R$ {totalValueOfCartItems}</span>
        </div>

        <div>
          <span className="textS">Entrega</span>
          <span className="textM">R$ 3,50</span>
        </div>

        <div className="textL">
          <span>Total</span>
          <span>R$ {totalCartValue.toFixed(2)}</span>
        </div>

        <NavLink to="/success">
          <button onClick={() => handleSubmit()}>CONFIRMAR PEDIDO</button>
        </NavLink>
      </CartSummary>
    </Cart>
  )
}
