'use client'

import { useRouter } from 'next/navigation'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { send } from '@/actions/actions'

type Message = {
  message: string | null
}

export default function HomePage() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const data = new FormData()
    data.set('message', message)

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        body: data,
      })

      if (!res.ok) throw res

      const json = await res.json()
      const eventId = json.eventId

      router.push(`/checkout/succeess/${eventId}`)
    } catch (error: any) {
      console.error(error)

      if (error?.status === 403) {
        router.push('/checkout/unauthorized')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="m-auto grid w-1/2 grid-cols-2 grid-rows-1 gap-12 py-10">
        <div className="mx-auto flex flex-col space-y-4">
          <h1>Estamos quase lá!</h1>
          <p>Insira seus dados de pagamento abaixo:</p>
          <form
            method="POST"
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit(e).catch((err) => console.error({ err }))
            }}
          >
            <fieldset>
              <div className="mb-4">
                <label
                  className="text-gray-700 mb-1 block text-sm font-medium"
                  htmlFor="cc-number"
                >
                  Número do cartão
                </label>
                <input
                  className="text-gray-900 focus:border-blue-500 focus:ring-blue-500 block w-full border border-red-500 p-2.5"
                  id="cc-number"
                  name="cc-number"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                />
              </div>

              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label
                    className="text-gray-700 mb-1 block text-sm font-medium"
                    htmlFor="cc-exp"
                  >
                    Validade
                  </label>
                  <input
                    className="text-gray-900 focus:border-blue-500 focus:ring-blue-500 block w-full border p-2.5"
                    id="cc-exp"
                    name="cc-exp"
                    type="text"
                    placeholder="MM/AA"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="text-gray-700 mb-1 block text-sm font-medium"
                    htmlFor="code"
                  >
                    CVV
                  </label>
                  <input
                    className="text-gray-900 focus:border-blue-500 focus:ring-blue-500 block w-full border p-2.5"
                    id="code"
                    name="code"
                    type="text"
                    placeholder="000"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="text-gray-700 mb-1 block text-sm font-medium"
                  htmlFor="name"
                >
                  Nome impresso no cartão
                </label>
                <input
                  className="text-gray-900 focus:border-blue-500 focus:ring-blue-500 block w-full border p-2.5"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-4">
                <label
                  className="text-gray-700 mb-1 block text-sm font-medium"
                  htmlFor="cpf"
                >
                  CPF
                </label>
                <input
                  className="text-gray-900 focus:border-blue-500 focus:ring-blue-500 block w-full border p-2.5"
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="mb-4">
                <label
                  className="text-gray-700 mb-1 block text-sm font-medium"
                  htmlFor="coupon"
                >
                  Cupom
                </label>
                <input
                  className="text-gray-900 focus:border-blue-500 focus:ring-blue-500 block w-full border p-2.5"
                  id="coupon"
                  name="coupon"
                  type="text"
                  placeholder="Insira aqui"
                />
              </div>

              <div className="mb-4">
                <label
                  className="text-gray-700 mb-1 block text-sm font-medium"
                  htmlFor="installments"
                >
                  Número de parcelas
                </label>
                <select
                  className="text-gray-900 focus:border-blue-500 focus:ring-blue-500 block w-full border p-2.5"
                  id="installments"
                  name="installments"
                >
                  <option value="">Selecionar</option>
                  <option value="2">2x de R$&nbsp;270,00/mês</option>
                  <option value="3">3x de R$&nbsp;180,00/mês</option>
                </select>
              </div>
            </fieldset>

            <Button>Finalizar pagamento</Button>
          </form>
        </div>
        <div className="mx-auto flex flex-col space-y-4">
          <h2>Confira o seu plano:</h2>
          <span>fulano@cicrano.com.br</span>
          <div className="w-full bg-slate-100 py-10">Cards</div>
          <small>Sobre a cobrança !</small>
        </div>
      </div>
    </>
  )
}
