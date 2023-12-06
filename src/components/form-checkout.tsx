'use client'

import { useFormik } from 'formik'
import { FormikProvider } from 'formik'
import { z } from 'zod'

import React from 'react'

import { Button } from '@/components/ui/button'
import { InputField } from '@/components/ui/input-field'
import { SelectField } from '@/components/ui/input-select'

import { generateInstallments } from '@/lib/generate-installments'
import { useOfferStore } from '@/store/offer'
import { CheckoutFormModel, ICheckoutForm } from '@/types/checkout'

export function FormCheckout() {
  const offerSelected = useOfferStore((state) => state.offerSelected)
  const formik = useFormik<ICheckoutForm>({
    initialValues: {
      offerId: '',
      name: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
      cpf: '',
      couponCode: '',
      installments: '0',
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
        <input type="hidden" name="offerId" value={offerSelected?.id || ''} />
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
              name="cpf"
              id="cpf"
              placeholder="000.000.000-00"
              mask="999.999.999-99"
              error={formik.touched.cpf && formik.errors.cpf}
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
            <SelectField
              label="Número de parcelas"
              name="installments"
              id="installments"
              placeholder="Selecionar"
              options={generateInstallments(
                offerSelected?.installments,
                offerSelected?.fullPrice,
                offerSelected?.discountAmmount
              )}
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
