'use client'

import { useFormik } from 'formik'
import { FormikProvider } from 'formik'
import { z } from 'zod'

import React from 'react'

import { Button } from '@/components/ui/button'
import InputField from '@/components/ui/input-field'
import { Select } from '@/components/ui/select'

import { CheckoutFormModel } from '@/models/checkout'

interface FormValues {
  name: string
  cardNumber: string
  cardExpiry: string
  cardCvc: string
  CPF: string
  couponCode: string
  installments: number
}

const FormCheckout: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
      CPF: '',
      couponCode: '',
      installments: 0,
    },
    validate: (values) => {
      try {
        CheckoutFormModel.parse(values)
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.formErrors.fieldErrors
        }
      }
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <input type="hidden" name="offerId" value="32" />
        <fieldset className="mb-2">
          <div className="mb-6">
            <InputField
              label="Número do cartão"
              name="cardNumber"
              id="cardNumber"
              placeholder="0000 0000 0000 0000"
              mask="9999 9999 9999 9999"
              autoComplete="cc-number"
              autoCorrect="off"
              spellCheck="false"
              error={formik.touched.cardNumber && formik.errors.cardNumber}
            />
          </div>

          <div className="mb-6 flex space-x-14">
            <div className="w-1/2">
              <InputField
                label="Validade"
                name="cardExpiry"
                id="cardExpiry"
                placeholder="MM/AA"
                mask="99/99"
                autoComplete="cc-exp"
                autoCorrect="off"
                spellCheck="false"
                error={formik.touched.cardExpiry && formik.errors.cardExpiry}
              />
            </div>
            <div className="w-1/2">
              <InputField
                label="CVC"
                name="cardCvc"
                id="cardCvc"
                placeholder="000"
                mask="999"
                autoComplete="cc-csc"
                autoCorrect="off"
                spellCheck="false"
                error={formik.touched.cardCvc && formik.errors.cardCvc}
              />
            </div>
          </div>

          <div className="mb-6">
            <InputField
              label="Nome impresso no cartão"
              name="name"
              id="name"
              placeholder="Seu nome"
              autoComplete="cc-name"
              autoCorrect="off"
              spellCheck="false"
              error={formik.touched.name && formik.errors.name}
            />
          </div>

          <div className="mb-6">
            <InputField
              label="CPF"
              name="CPF"
              id="cpf"
              placeholder="000.000.000-00"
              mask="999.999.999-99"
              error={formik.touched.CPF && formik.errors.CPF}
            />
          </div>

          <div className="mb-6">
            <InputField
              label="Cupom"
              name="couponCode"
              id="couponCode"
              placeholder="Insira aqui"
              error={formik.touched.couponCode && formik.errors.couponCode}
            />
          </div>

          <div className="mb-6">
            <Select
              label="Número de parcelas"
              id="installments"
              placeholder="Selecionar"
              options={[
                { label: 'Selecionar', value: '0' },
                { label: '1x de R$ 580,00/mês', value: '1' },
                { label: '2x de R$ 270,00/mês', value: '2' },
                { label: '3x de R$ 180,00/mês', value: '3' },
                { label: '4x de R$ 144,00/mês', value: '4' },
                { label: '5x de R$ 120,00/mês', value: '5' },
                { label: '6x de R$ 96,00/mês', value: '6' },
                { label: '7x de R$ 80,00/mês', value: '7' },
                { label: '8x de R$ 72,00/mês', value: '8' },
                { label: '9x de R$ 64,00/mês', value: '9' },
                { label: '10x de R$ 60,00/mês', value: '10' },
              ]}
            />
          </div>
        </fieldset>

        <Button type="submit" className="w-full">
          Finalizar pagamento
        </Button>
      </form>
    </FormikProvider>
  )
}

export default FormCheckout
