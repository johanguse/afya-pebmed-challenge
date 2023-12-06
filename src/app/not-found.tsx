import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <p className="text-5xl">404</p>
      <h1 className="my-8 text-3xl">Pagina não encontrada.</h1>
      <Button href="/" variant="tertiary">
        Ir para Home
      </Button>
    </div>
  )
}
