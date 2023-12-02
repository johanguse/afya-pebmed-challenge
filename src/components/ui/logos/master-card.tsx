import React from 'react'

type LogoMasterCardProps = React.SVGProps<SVGSVGElement> & {
  width?: number
  height?: number
}

export function LogoMasterCard({
  width,
  height,
  ...props
}: LogoMasterCardProps) {
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
      <g fillRule="evenodd">
        <path
          d="M-.1 1.8C-.1.8.7 0 1.7 0h28.6c1 0 1.8.8 1.8 1.8v19.3c0 1-.8 1.8-1.8 1.8H1.7c-1 0-1.8-.8-1.8-1.8z"
          fill="#0071bc"
        />
        <path
          d="M13.8 11.6c0-1 .2-1.9.6-2.8.4-.9 1.1-1.7 1.8-2.3-.9-.7-2.1-1.2-3.3-1.3-1.2-.2-2.4 0-3.5.6-1.2.5-2.1 1.3-2.7 2.4-.7 1-1 2.2-1 3.4 0 1.3.3 2.5 1 3.5.6 1 1.5 1.9 2.7 2.4 1.1.5 2.3.7 3.5.6 1.2-.1 2.4-.6 3.3-1.4-.7-.6-1.4-1.3-1.8-2.2-.4-.9-.6-1.9-.6-2.9z"
          fill="#e71b26"
        />
        <path
          d="M16.2 16.7c1.4 0 2.5-2.3 2.5-5.1s-1.1-5.1-2.5-5.1c-1.3 0-2.4 2.3-2.4 5.1s1.1 5.1 2.4 5.1z"
          fill="#f36523"
        />
        <path
          d="M20.3 5.1c-1.5 0-2.9.5-4.1 1.4.8.6 1.4 1.4 1.9 2.3.4.9.6 1.8.6 2.8 0 1-.2 2-.6 2.9-.5.9-1.1 1.6-1.9 2.2.8.7 1.8 1.1 2.8 1.3 1 .2 2.1.2 3.1-.1 1-.3 1.9-.8 2.7-1.6.7-.7 1.3-1.6 1.6-2.5.4-1 .5-2.1.3-3.1-.1-1-.5-2-1.1-2.8-.6-.9-1.4-1.6-2.3-2.1-1-.4-2-.7-3-.7z"
          fill="#fa9f1b"
        />
      </g>
    </svg>
  )
}
