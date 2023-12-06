import { Option } from '@/components/ui/input-select'

import { formatCurrency } from '@/lib/format/currency'

export function generateInstallments(
  installments: number = 0,
  fullPrice: number = 0,
  discountAmmount: number = 0
): Option[] {
  if (installments === 0 || fullPrice === 0) {
    return []
  }

  const discountedPrice = fullPrice - discountAmmount

  const installmentsList: Option[] = []

  for (
    let installmentNumber = 1;
    installmentNumber <= installments;
    installmentNumber++
  ) {
    const installmentValue = discountedPrice / installmentNumber
    installmentsList.push({
      value: installmentNumber.toString(),
      label: `${installmentNumber}x de ${formatCurrency(
        installmentValue,
        'BRL'
      )}`,
    })
  }

  return installmentsList
}
