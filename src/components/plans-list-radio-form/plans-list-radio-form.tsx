import Image from 'next/image'

type SubscriptionPlan = {
  id: number
  storeId: string
  title: string
  description: string
  caption: string
  fullPrice: number
  discountAmmount: number
  discountPercentage: number
  periodLabel: string
  period: string
  discountCouponCode: string | null
  order: number
  priority: number
  gateway: string
  splittable: boolean
  installments: number
  acceptsCoupon: boolean
}

async function getPlansListData() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const res = await fetch(
    'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer',
    { next: { revalidate: 10 } }
  )
  const data: SubscriptionPlan[] = await res.json()

  console.log(data)

  return data
}

export async function PlansListRadioForm() {
  const data = await getPlansListData()
  return (
    <>
      {data.map((plan) => (
        <div
          key={plan.id}
          className="flex flex-col items-center justify-center gap-4"
        >
          <p>{plan.title}</p>
          <p>{plan.description}</p>
          <p>{plan.caption}</p>
          <p>{plan.fullPrice}</p>
          <p>{plan.discountAmmount}</p>
          <p>{plan.discountPercentage}</p>
          <p>{plan.periodLabel}</p>
          <p>{plan.period}</p>
          <p>{plan.discountCouponCode}</p>
          <p>{plan.order}</p>
          <p>{plan.priority}</p>
          <p>{plan.gateway}</p>
          <p>{plan.splittable}</p>
          <p>{plan.installments}</p>
          <p>{plan.acceptsCoupon}</p>
        </div>
      ))}
    </>
  )
}
