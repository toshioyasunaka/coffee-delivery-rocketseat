import { InputHTMLAttributes, forwardRef, LegacyRef } from 'react'

import { Radio } from './style'

type PaymentRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  children: string | JSX.Element | JSX.Element[]
  isSelected: boolean
}

export const PaymentRadio = forwardRef(function PaymentRadio(
  { children, isSelected, ...rest }: PaymentRadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Radio className="paymentRadio" data-state={isSelected}>
      <input type="radio" {...rest} ref={ref} />
      {children}
    </Radio>
  )
})
