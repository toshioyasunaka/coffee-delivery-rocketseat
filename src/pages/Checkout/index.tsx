import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { Header } from '../../components/header'
import {
  PaymentMethod,
  PaymentRadio,
} from '../../components/form/PaymentRadio/Index'
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

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe a tarefa'),
  city: zod.string().min(1, 'Informe a cidade'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  number: zod.number().min(1, 'Informe o número'),
  paymentMethod: zod.string().min(1, 'Informe o número'),
  street: zod.string().min(1, 'Informe a rua'),
  uf: zod.string().min(1, 'Informe o estado'),
})

export function Checkout() {
  const theme = useTheme()

  type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

  const { register, watch, handleSubmit } = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      district: '',
      number: 0,
      paymentMethod: '',
      street: '',
      uf: '',
    },
  })

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)
  }

  const selectedPaymentMethod = watch('paymentMethod')
  const cep = watch('cep')
  console.log(cep)

  return (
    <>
      <Header />
      <CheckOut>
        <AddressAndCart>
          <Form id="order" onSubmit={handleSubmit(handleCreateNewOrder)}>
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
                  type="text"
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
                  type="text"
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
                  value={PaymentMethod.CREDIT_CARD}
                  {...register('paymentMethod')}
                >
                  <CreditCard size={16} color={theme.purple} />
                  <span>CARTÃO DE CRÉDITO</span>
                </PaymentRadio>

                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'debt'}
                  value={PaymentMethod.DEBT_CARD}
                  {...register('paymentMethod')}
                >
                  <Bank size={16} color={theme.purple} />
                  <span>CARTÃO DE DÉBITO</span>
                </PaymentRadio>

                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'cash'}
                  value={PaymentMethod.CASH}
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
              <CartItem coffees={[coffees[0], coffees[1]]} />
            </Card>
          </Cart>
        </AddressAndCart>
      </CheckOut>
    </>
  )
}
