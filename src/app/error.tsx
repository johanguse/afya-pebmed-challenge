'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { IconError } from '@/components/ui/icons/error'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center py-24">
      <IconError width={120} height={120} />
      <h1 className="my-8 text-3xl">Algo não deu certo...</h1>
      <Button onClick={() => reset()} variant="primary" className="mb-8">
        Tentar novamente
      </Button>
      <Button href="/" variant="tertiary">
        Ir para Home
      </Button>
      {error.digest && (
        <p className="mt-10 text-xs text-gray-500">Digest: {error.digest}</p>
      )}
    </div>
  )
}
