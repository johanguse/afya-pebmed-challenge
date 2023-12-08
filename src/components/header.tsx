import Link from 'next/link'

import { IconArrowLeft } from '@/components/ui/icons/arrow-left'
import { LogoW } from '@/components/ui/logos/logo'

export function Header() {
  return (
    <header
      className="flex items-center p-4 lg:px-16 lg:py-8"
      data-testid="header"
    >
      <Link href="/" className="p-2">
        <IconArrowLeft width={8} height={13} />
      </Link>
      <LogoW width={42} height={30} aria-label="logo W" className="mx-auto" />
    </header>
  )
}
