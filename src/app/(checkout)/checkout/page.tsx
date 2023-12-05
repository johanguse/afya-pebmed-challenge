import { Suspense } from 'react'

import FormCheckout from '@/components/form-checkout'
import { PaymentMethods } from '@/components/payment-methods'
import { PlansListRadioForm } from '@/components/plans-list'
import { SkeletonPlans as Skeleton } from '@/components/skeleton/skeleton-plans'
import { IconTooltip } from '@/components/ui/icons'
import { Tooltip } from '@/components/ui/tooltip'

export default async function CheckoutPage() {
  return (
    <>
      <div className="m-auto flex w-full flex-col-reverse px-4 py-8 lg:grid lg:max-w-4xl lg:flex-none lg:grid-cols-2 lg:gap-48 lg:px-0">
        <div className="w-full">
          <h1 className="mb-2 text-xl">Estamos quase lá!</h1>
          <p className="mb-8">Insira seus dados de pagamento abaixo:</p>
          <div className="mb-8">
            <PaymentMethods />
          </div>
          <div className="mb-8">
            <FormCheckout />
          </div>
        </div>
        <div className="mb-12 w-full lg:mb-0">
          <h2 className="mb-2 text-xl">Confira o seu plano:</h2>
          <div className="mb-4">
            <span className="text-custom-yellow-600 rounded-xl border-1 border-gray-50 px-3 py-1 text-xs">
              fulano@cicrano.com.br
            </span>
          </div>
          <div className="mb-4 flex w-full flex-col space-y-3 py-4">
            <Suspense fallback={<Skeleton />}>
              <PlansListRadioForm name="plan" />
            </Suspense>
          </div>
          <div className="mx-auto flex w-full flex-row items-center justify-center text-center">
            <Tooltip className="cursor-help" message="Sobre a cobrança">
              <span className="mr-3 text-xs">Sobre a cobrança</span>
              <IconTooltip width={16} height={16} />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}
