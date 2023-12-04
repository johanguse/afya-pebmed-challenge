import React from 'react'

type LogoDinersProps = React.SVGProps<SVGSVGElement> & {
  width?: number
  height?: number
}

export function LogoDiners({ width, height, ...props }: LogoDinersProps) {
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
          fillRule="evenodd"
          d="M0 1.9C0 .9.8.1 1.8.1h28.5c1 0 1.8.8 1.8 1.8v19.3c0 1-.8 1.8-1.8 1.8H1.8c-1 0-1.8-.8-1.8-1.8z"
          fill="#ccc"
        />
        <path
          fillRule="evenodd"
          d="M18.3 18.1c3.5.1 6.8-2.9 6.8-6.4 0-3.9-3.3-6.6-6.8-6.6h-3.1c-3.6 0-6.6 2.7-6.6 6.6 0 3.5 3 6.5 6.6 6.5z"
          fill="#004a98"
        />
        <path
          fillRule="evenodd"
          d="M15.2 5.7c-1.2-.1-2.3.3-3.3 1-1 .6-1.7 1.5-2.2 2.6-.5 1.1-.6 2.3-.3 3.5.2 1.1.8 2.2 1.6 3 .8.9 1.9 1.4 3 1.7 1.2.2 2.4.1 3.5-.4 1.1-.4 2-1.2 2.7-2.2.6-.9 1-2.1 1-3.3 0-1.6-.7-3.1-1.8-4.2s-2.6-1.7-4.2-1.7m-3.8 5.9c0-.7.3-1.5.7-2.1.4-.7 1-1.1 1.8-1.4v7c-.8-.2-1.4-.7-1.8-1.3-.4-.7-.7-1.4-.7-2.2zm5.2 3.5v-7c.7.3 1.3.7 1.7 1.4.5.6.7 1.4.7 2.1 0 .8-.2 1.5-.7 2.2-.4.6-1 1.1-1.7 1.3z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}
