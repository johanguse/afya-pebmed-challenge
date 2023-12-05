export type ISubscription = {
  couponCode: string | null
  creditCardCPF: string
  creditCardCVV: string
  creditCardExpirationDate: string
  creditCardHolder: string
  creditCardNumber: string
  gateway: string
  installments: number
  offerId: number
  userId: number
  id: number
}
