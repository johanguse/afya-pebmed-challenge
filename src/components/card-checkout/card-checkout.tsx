type ApiResponse = {
  couponCode: string | null
  creditCardCPF: string
  creditCardCVV: string
  creditCardExpirationDate: string
  creditCardHolder: string
  creditCardNumber: string
  gateway: string
  installments: number
  offerId: number
  userId: number
  id: number
}

async function getCheckoutData() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const res = await fetch(
    'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription',
    { next: { revalidate: 10 } }
  )
  const data: Pick<ApiResponse, 'creditCardCPF'> = await res.json()

  //console.log(data)

  return data
}

export async function CardCheckout() {
  const data = await getCheckoutData()

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p>{data.creditCardCPF}</p>
    </div>
  )
}
