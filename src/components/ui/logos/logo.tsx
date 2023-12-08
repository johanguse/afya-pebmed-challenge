import React from 'react'

type LogoWProps = React.SVGProps<SVGSVGElement> & {
  width?: number
  height?: number
}

export function LogoW({ width, height, ...props }: LogoWProps) {
  const { 'aria-label': ariaLabel, ...rest } = props

  return (
    <svg
      {...rest}
      aria-label={ariaLabel}
      role="img"
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      {ariaLabel && <title>{ariaLabel}</title>}{' '}
      <path
        d="M41.388 6.423c0 2.718-2.153 4.921-4.808 4.921-2.656 0-4.809-2.203-4.809-4.92 0-2.718 2.153-4.922 4.809-4.922 2.655 0 4.808 2.204 4.808 4.921Z"
        fill="#F5850B"
      />
      <path
        d="M2.753 8.748a4.883 4.883 0 1 1 8.76-4.321l7.777 15.765a4.883 4.883 0 1 1-8.759 4.322L2.753 8.748ZM17.445 8.748a4.883 4.883 0 1 1 8.76-4.321l7.777 15.765a4.883 4.883 0 0 1-8.759 4.322L17.445 8.748Z"
        fill="#191847"
      />
      <path
        d="M17.198 4.508a4.883 4.883 0 0 1 9.016 3.754l-6.757 16.23a4.883 4.883 0 1 1-9.016-3.754l6.757-16.23Z"
        fill="#191847"
      />
    </svg>
  )
}
