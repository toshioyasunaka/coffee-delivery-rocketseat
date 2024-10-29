/* eslint-disable import/no-absolute-path */
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer, Aside, Badge } from './style'
import Logo from '/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Página Inicial">
        <img src={Logo} alt="Coffee Delivery Logo" />
      </NavLink>

      <Aside>
        <Badge>
          <MapPin size={22} weight="fill" />
          <span className="textS">Porto Alegre, RS</span>
        </Badge>

        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <span>2</span>
        </NavLink>
      </Aside>
    </HeaderContainer>
  )
}
