import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { PaymentRadio } from '../../components/form/PaymentRadio/Index'
import { CartItem } from '../../components/form/CartItem/Index'
import {
  CheckOut,
  AddressAndCart,
  Form,
  Cart,
  Card,
  Title,
  AddressForm,
  PaymentRadios,
} from './style'
import { coffees } from '../../../data.json'

const newOrderValidationSchema = z.object({
  cep: z.string({ invalid_type_error: 'Informe o CEP' }),
  city: z.string(),
  complement: z.string(),
  district: z.string(),
  number: z.string(),
  street: z.string(),
  uf: z.string(),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export function Checkout() {
  const theme = useTheme()

  type FormInputs = z.infer<typeof newOrderValidationSchema>

  const { register, watch, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      paymentMethod: 'debit',
    },
  })

  function handleSubmitOrder(data: FormInputs) {
    console.log(data)
  }

  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <>
      <CheckOut>
        <AddressAndCart>
          <Form id="order" onSubmit={handleSubmit(handleSubmitOrder)}>
            <h2 className="titleXS">Complete seu pedido</h2>

            <Card>
              <Title>
                <MapPinLine size={22} color={theme['yellow-dark']} />
                <div>
                  <h3 className="textM">Endereço de Entrega</h3>
                  <span className="textS">
                    Informe o endereço onde deseja receber seu pedido
                  </span>
                </div>
              </Title>

              <AddressForm>
                <input
                  type="string"
                  id="cep"
                  placeholder="CEP"
                  {...register('cep')}
                />
                <input
                  type="text"
                  id="street"
                  placeholder="Rua"
                  {...register('street')}
                />
                <input
                  type="number"
                  id="number"
                  placeholder="Número"
                  {...register('number')}
                />
                <input
                  type="text"
                  id="complement"
                  placeholder="Complemento"
                  {...register('complement')}
                />
                <input
                  type="text"
                  id="district"
                  placeholder="Bairro"
                  {...register('district')}
                />
                <input
                  type="text"
                  id="city"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <input
                  type="text"
                  id="uf"
                  placeholder="UF"
                  {...register('uf')}
                />
              </AddressForm>
            </Card>

            <Card>
              <Title>
                <CurrencyDollar size={22} color={theme.purple} />
                <div>
                  <h3 className="textM">Pagamento</h3>
                  <span className="textS">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </Title>

              <PaymentRadios className="buttonM">
                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'credit'}
                  value="credit"
                  {...register('paymentMethod')}
                >
                  <CreditCard size={16} color={theme.purple} />
                  <span>CARTÃO DE CRÉDITO</span>
                </PaymentRadio>

                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'debit'}
                  value="debit"
                  {...register('paymentMethod')}
                >
                  <Bank size={16} color={theme.purple} />
                  <span>CARTÃO DE DÉBITO</span>
                </PaymentRadio>

                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'cash'}
                  value="cash"
                  {...register('paymentMethod')}
                >
                  <Money size={16} color={theme.purple} />
                  <span>DINHEIRO</span>
                </PaymentRadio>
              </PaymentRadios>
            </Card>
          </Form>

          <Cart>
            <h2 className="titleXS">Cafés selecionados</h2>

            <Card className="cart">
              <CartItem
                submitOrder={handleSubmit(handleSubmitOrder)}
                coffees={[coffees[0], coffees[1]]}
              />
            </Card>
          </Cart>
        </AddressAndCart>
      </CheckOut>
    </>
  )
}
