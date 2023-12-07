import { IOffer } from '@/types/offer'

export const mockOffers: IOffer[] = [
  {
    id: 1,
    storeId: 'anual_parcelado_mercadopago',
    title: 'Anual',
    description: 'Parcelado',
    caption: '15 Dias Grátis',
    fullPrice: 900,
    discountAmmount: 75,
    discountPercentage: 0.2,
    periodLabel: 'mês',
    period: 'month',
    discountCouponCode: null,
    order: 1,
    priority: 1,
    gateway: 'mercadopago',
    splittable: true,
    installments: 6,
    acceptsCoupon: true,
  },
]
