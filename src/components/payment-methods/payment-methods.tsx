import Image from 'next/image'

export function PaymentMethods() {
  return (
    <>
      <div className="mb-3 flex justify-center gap-4">
        <Image src="/master.svg" alt="Mastercard" width={32} height={23} />
        <Image src="/diners.svg" alt="Diners club" width={32} height={23} />
        <Image
          src="/american_express.svg"
          alt="American express"
          width={32}
          height={23}
        />
        <Image src="/visa.svg" alt="Visa" width={32} height={23} />
        <Image src="/elo.svg" alt="Elo" width={32} height={23} />
      </div>
      <p className="flex items-center justify-center gap-2">
        <span className="text-gray-200 text-[10px]">Pagamentos por</span>
        <Image src="/iugu.svg" alt="Iugu" width={29} height={11} />
      </p>
    </>
  )
}
