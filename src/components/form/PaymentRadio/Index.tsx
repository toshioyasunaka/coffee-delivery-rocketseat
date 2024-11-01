import { forwardRef, LegacyRef } from 'react'

import { Radio } from './style'

export enum PaymentMethod {
  CREDIT_CARD,
  DEBT_CARD,
  CASH,
}

type PaymentRadioProps = {
  children: string | JSX.Element | JSX.Element[]
  value: PaymentMethod
  isSelected: boolean
  ref: HTMLInputElement
}

const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  'input[type="radio"]',
)
const labels: NodeListOf<HTMLLabelElement> =
  document.querySelectorAll('.paymentRadio')

function checkRadio(value: PaymentMethod): void {
  for (const radio of radios) {
    // Remove a classe 'checked' de todas as labels
    labels.forEach((r) => r.classList.remove('checked'))

    // Adiciona a classe 'checked' à label selecionada
    if (parseInt(radio.value) === value) {
      labels[value].classList.add('checked')
      break
    }
  }
}

export const PaymentRadio = forwardRef(function PaymentRadio(
  { children, value, isSelected }: PaymentRadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  console.log(ref)
  return (
    <Radio className="paymentRadio" data-state={isSelected}>
      <input
        type="radio"
        name="paymentMethod"
        value={value}
        onClick={() => checkRadio(value)}
        ref={ref}
      />
      {children}
    </Radio>
  )
})
