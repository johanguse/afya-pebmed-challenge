import Image from 'next/image'
import Link from 'next/link'

import { ArrowLeft } from '@/components/ui/icons/arrow-left'

export function Header() {
  return (
    <header className="flex items-center justify-between p-8 lg:px-16 lg:py-8">
      <Link href="/">
        <ArrowLeft />
      </Link>
      <Image
        src="/images/logo_w.svg"
        width={52}
        height={19}
        alt="logo W"
        className="mx-auto"
      />
    </header>
  )
}
