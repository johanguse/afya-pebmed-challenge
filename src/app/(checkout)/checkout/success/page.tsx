import { Suspense } from 'react'

import { CardCheckout } from '@/components/card-checkout'
import { SkeletonSuccess as Skeleton } from '@/components/skeleton/skeleton-success'
import { Button } from '@/components/ui/button'
import { IconCheckmark } from '@/components/ui/icons/checkmark'

export const metadata = {
  title: {
    default: 'Compra concluída',
  },
}

export default function SuccessPage() {
  return (
    <div className="container mx-auto flex max-w-sm flex-col justify-center px-4 py-6 text-center lg:px-0">
      <div className="m-auto w-full">
        <div className="mx-auto mb-6 mt-10 text-center">
          <IconCheckmark className="mx-auto" />
        </div>
        <h1 className="my-4 text-xl text-blue">Parabéns!</h1>
        <p className="mb-16 px-16 text-gray-200">
          Sua assinatura foi realizada com sucesso.
        </p>
        <div className="mb-28 w-full rounded-2xl px-5 py-4 shadow-xl">
          <Suspense fallback={<Skeleton />}>
            <CardCheckout />
          </Suspense>
        </div>
        <div>
          <Button href="/" className="mb-8" variant="tertiary">
            Gerenciar assinatura
          </Button>
          <Button href="/" className="w-full" variant="secondary">
            Ir para Home
          </Button>
        </div>
      </div>
    </div>
  )
}
