import { Suspense } from 'react'

import { CardCheckout } from '@/components/card-checkout'
import { Button } from '@/components/ui/button'
import { CheckmarkAnimation } from '@/components/ui/icons'

export default function SuccessPage() {
  return (
    <div className="container mx-auto flex max-w-3xl flex-col justify-center bg-orange py-6 text-center">
      <div className="m-auto w-full px-8">
        <div className="mx-auto mb-4 text-center">
          <CheckmarkAnimation />
        </div>
        <h1 className="my-4 text-xl font-bold">Parabéns!</h1>
        <p>Sua assinatura foi realizada com sucesso.</p>
        <Suspense fallback={<p>Carregando...</p>}>
          <CardCheckout />
        </Suspense>
        <div>
          <p className="text-blue">Gerenciar assinatura</p>
          <Button className="uppercase">Ir para Home</Button>
        </div>
      </div>
    </div>
  )
}
