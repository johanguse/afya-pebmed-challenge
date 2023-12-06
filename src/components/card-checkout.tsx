import { env } from '@/env.mjs'

import { IconStar } from '@/components/ui/icons/star'

import { formatCPF } from '@/lib/format'
import { ISubscription } from '@/types/subscription'

async function getCheckoutData() {
  try {
    const url = `${process.env.NEXT_PUBLIC_MOCK_API_URL}/subscription`

    const res = await fetch(url, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error(`HTTP error, status = ${res.status}`)
    }

    const data: ISubscription = await res.json()

    return data
  } catch (error) {
    console.error('Failed to fetch checkout data:', error)

    throw error
  }
}

export async function CardCheckout() {
  const data = await getCheckoutData()

  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-between rounded-2xl bg-gray-50 px-6 py-4">
        <IconStar />
        <div className="text-right">
          <p className="mb-2 text-base text-blue">
            Anual <span className="mx-1">|</span> Parcelado
          </p>
          <p className="text-sm text-blue">
            R$ 479,90 <span className="mx-1">|</span> 10x R$ 47,99
          </p>
        </div>
      </div>
      <p className="mb-6 flex justify-between px-6 text-sm">
        <span className="text-gray-200">E-mail</span>
        <span>fulano@cicrano.com.br</span>
      </p>
      <p className="mb-2 flex justify-between px-6 text-sm">
        <span className="text-gray-200">CPF</span>
        <span>{formatCPF(data.creditCardCPF)}</span>
      </p>
    </div>
  )
}
