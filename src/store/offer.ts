import { create } from 'zustand'

import { IOffer } from '@/types/offer'

interface StoreState {
  offerSelected: IOffer | null
  setOffer: (offer: IOffer) => void
}

export const useOfferStore = create<StoreState>()((set) => ({
  offerSelected: null,
  setOffer: (offer) => set(() => ({ offerSelected: offer })),
}))
