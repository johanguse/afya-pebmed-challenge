import { z } from 'zod'

const validInstallmentsRegex = /^(?!0$)([1-9][0-9]*)$/
export const CheckoutFormModel = z.object({
  cardNumber: z
    .string({ required_error: 'Preencha o número do cartão.' })
    .min(13, { message: 'Preencha o número do cartão.' })
    .max(19),
  cardExpiry: z
    .string({ required_error: 'Preencha a data de validade.' })
    .length(5, { message: 'Preencha a data de validade.' }),
  cardCvc: z.string({ required_error: 'Preencha o CVC.' }).length(3, {
    message: 'Preencha o CVC.',
  }),
  name: z.string().min(1, { message: 'Preencha seu nome' }),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
  coupon: z.string().optional(),
  installments: z
    .string({ required_error: 'Selecione o número de parcelas.' })
    .min(1, { message: 'Escolha o número de parcelas.' })
    .regex(validInstallmentsRegex, {
      message: 'Selecione o número de parcelas.',
    }),
})

export type CheckoutForm = z.infer<typeof CheckoutFormModel>
