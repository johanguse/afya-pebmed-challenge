import { env } from '@/env.mjs'

import { Fragment } from 'react'

import { formatCurrency, formatPercentage } from '@/lib/format'
import { OfferApiResponse } from '@/types/offer-api'

async function getPlansListData() {
  await new Promise((r) => setTimeout(r, 2000))

  try {
    const res = await fetch(env.NEXT_PUBLIC_OFFER_API_URL, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`HTTP error, status = ${res.status}`)
    }

    const data: OfferApiResponse[] = await res.json()

    data.sort((a, b) => b.id - a.id)

    return data
  } catch (error) {
    console.error('Failed to fetch plans list data:', error)
    throw error
  }
}

interface PlansListRadioFormProps {
  name: string
}

export async function PlansListRadioForm({ name }: PlansListRadioFormProps) {
  const data = await getPlansListData()

  const handlePlanChange = (planId: number) => {
    console.log('handlePlanChange', planId)
  }

  return (
    <>
      {data.map((plan) => (
        <Fragment key={plan.id}>
          <input
            className="hidden"
            type="radio"
            name={name}
            id={`plan-${plan.id}`}
          />
          <label
            htmlFor={`plan-${plan.id}`}
            className="relative block cursor-pointer rounded-2xl border-1 border-blue p-5 after:absolute after:right-5 after:top-1/2 after:block after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:border-2 after:border-white after:bg-white after:shadow-[0_0_0_2px_#F4F3F6] after:content-['']"
          >
            <span className="text-sm font-bold text-blue">
              {plan.title} <span className="mx-1">|</span> {plan.description}
            </span>
            <div className="mr-8 flex place-items-end justify-between">
              <span className="text-xs text-blue">
                De {formatCurrency(plan.fullPrice, 'BRL')}{' '}
                <span className="mx-1">|</span> Por{' '}
                {formatCurrency(plan.fullPrice - plan.discountAmmount, 'BRL')}
              </span>
              <span className="inline-block rounded-lg bg-orange px-2 py-[1px] text-xxs text-white">
                -{formatPercentage(plan.discountPercentage)}
              </span>
            </div>
            <span className="text-xxs text-orange">
              {plan.installments}x de{' '}
              {formatCurrency(
                (plan.fullPrice - plan.discountAmmount) / plan.installments,
                'BRL'
              )}
            </span>
          </label>
        </Fragment>
      ))}
    </>
  )
}
