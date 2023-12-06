'use client'

import { Button } from '@/components/ui/button'

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <p className="text-5xl">Home Page</p>
      <h1 className="my-8 text-3xl">Bem vindo</h1>
      <Button href="/checkout" variant="tertiary">
        Ir para Checkout
      </Button>
    </div>
  )
}
