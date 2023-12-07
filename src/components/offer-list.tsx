import { Offers } from '@/components/ui/offers'

import { IOffer } from '@/types/offer'

async function getOfferListData() {
  try {
    const url = `${process.env.NEXT_PUBLIC_MOCK_API_URL}/offer`

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`HTTP error, status = ${res.status}`)
    }

    const data: IOffer[] = await res.json()

    data.sort((a, b) => b.id - a.id)

    return data
  } catch (error) {
    console.error('Failed to fetch plans list data:', error)
    throw error
  }
}

export async function OfferList() {
  const data = await getOfferListData()

  return <Offers offers={data} />
}
