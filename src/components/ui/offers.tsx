'use client'

import { useEffect } from 'react'

import { OfferSelect } from '@/components/ui/offer-select'

import { useOfferStore } from '@/src/store/offer'
import { IOffer } from '@/types/offer'

type Props = {
  offers: IOffer[]
}

export function Offers({ offers }: Props) {
  const offerSelected = useOfferStore((state) => state.offerSelected)
  const setOffer = useOfferStore((state) => state.setOffer)

  const handleChange = (offer: IOffer) => {
    setOffer(offer)
  }

  useEffect(() => {
    setOffer(offers[0])
  }, [])

  return (
    <div className="mb-8 flex flex-col gap-4">
      {offers.map((offer) => (
        <OfferSelect
          key={offer.id}
          id={offer.id.toString()}
          name="offer"
          title={offer.title}
          description={offer.description}
          fullPrice={offer.fullPrice}
          discountAmmount={offer.discountAmmount}
          discountPercentage={offer.discountPercentage}
          installments={offer.installments}
          checked={offerSelected?.id === offer.id}
          onChange={() => handleChange(offer)}
        />
      ))}
    </div>
  )
}
