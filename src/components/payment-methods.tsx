import Image from 'next/image'

import {
  LogoAmex,
  LogoDiners,
  LogoElo,
  LogoIugu,
  LogoMasterCard,
  LogoVisa,
} from '@/components/ui/logos'

export function PaymentMethods() {
  return (
    <>
      <div className="mb-3 flex justify-center gap-4">
        <LogoMasterCard aria-label="Logo Mastercard" width={32} height={23} />
        <LogoDiners aria-label="Logo Diners" width={32} height={23} />
        <LogoAmex aria-label="Logo American express" width={32} height={23} />
        <LogoVisa aria-label="Logo Visa" width={32} height={23} />
        <LogoElo aria-label="Logo Elo" width={32} height={23} />
      </div>
      <p className="flex items-center justify-center gap-2">
        <span className="text-xxs text-gray-100">Pagamentos por</span>
        <LogoIugu aria-label="Iugu Logo" width={29} height={11} />
      </p>
    </>
  )
}
