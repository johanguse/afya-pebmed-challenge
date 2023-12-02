import Image from 'next/image'
import Link from 'next/link'

import { IconArrowLeft } from '@/components/ui/icons/arrow-left'

export function Header() {
  return (
    <header className="flex items-center justify-between p-8 lg:px-16 lg:py-8">
      <Link href="/">
        <IconArrowLeft width={8} height={13} aria-label="Voltar" />
      </Link>
      <Image
        src="/images/logo_w.svg"
        width={43}
        height={10}
        alt="logo W"
        className="mx-auto"
      />
    </header>
  )
}
