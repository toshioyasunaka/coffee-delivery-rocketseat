/* eslint-disable import/no-absolute-path */
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { HeaderContainer, Aside, Badge } from './style'
import Logo from '/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery Logo" />

      <Aside>
        <Badge>
          <MapPin size={22} weight="fill" />
          <span className="textS">Porto Alegre, RS</span>
        </Badge>

        <a href="/">
          <ShoppingCart size={22} weight="fill" />
          <span>2</span>
        </a>
      </Aside>
    </HeaderContainer>
  )
}
