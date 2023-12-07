import { formatCurrency } from '@/lib/format/currency'
import { formatPercentage } from '@/lib/format/percent'

type Props = {
  id: string
  name: string
  title: string
  description: string
  fullPrice: number
  discountAmmount: number
  discountPercentage: number
  installments: number
  checked: boolean
  onChange: () => void
}

export function OfferSelect({
  id,
  name,
  title,
  description,
  fullPrice,
  discountAmmount,
  discountPercentage,
  installments,
  checked,
  onChange,
}: Props) {
  return (
    <>
      <input
        className="hidden [&:checked+label]:after:bg-blue [&:checked+label]:after:shadow-checkedOption"
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="relative block cursor-pointer rounded-2xl border-1 border-blue p-5 after:absolute after:right-5 after:top-1/2 after:block after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:border-2 after:border-white after:bg-white after:shadow-unckedOption after:content-['']"
      >
        <span className="text-sm font-bold text-blue">
          {title} <span className="mx-1">|</span> {description}
        </span>
        <div className="mr-8 flex place-items-end justify-between">
          <span className="text-xs text-blue">
            De {formatCurrency(fullPrice, 'BRL')}{' '}
            <span className="mx-1">|</span> Por{' '}
            {formatCurrency(fullPrice - discountAmmount, 'BRL')}
          </span>
          <span className="inline-block rounded-lg bg-orange px-2 py-[1px] text-xxs text-white">
            -{formatPercentage(discountPercentage)}
          </span>
        </div>
        <span className="text-xxs text-orange">
          {installments}x de{' '}
          {formatCurrency((fullPrice - discountAmmount) / installments, 'BRL')}
        </span>
      </label>
    </>
  )
}
