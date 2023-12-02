import React from 'react'

type LogoEloProps = React.SVGProps<SVGSVGElement> & {
  width?: number
  height?: number
}

export function LogoElo({ width, height, ...props }: LogoEloProps) {
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
        id="Layer"
        fillRule="evenodd"
        d="M0 1.8C0 .8.8 0 1.8 0h28.4c1 0 1.8.8 1.8 1.8V21c0 1-.8 1.8-1.8 1.8H1.8C.8 22.8 0 22 0 21z"
        fill="#221f20"
      />
      <path
        fillRule="evenodd"
        d="M8.5 9q.3-.1.7-.1c1.2 0 2.1.8 2.3 1.9l1.6-.4c-.3-1.8-1.9-3.1-3.9-3.1q-.6 0-1.2.2z"
        fill="#fbc707"
      />
      <path
        fillRule="evenodd"
        d="M6.6 14.2 7.7 13c-.5-.4-.8-1.1-.8-1.8s.3-1.3.8-1.7L6.6 8.3c-.8.7-1.4 1.8-1.4 2.9 0 1.2.6 2.3 1.4 3z"
        fill="#38a7e4"
      />
      <path
        fillRule="evenodd"
        d="M11.5 11.7c-.2 1.1-1.1 1.9-2.3 1.9q-.4 0-.7-.1L8 15q.6.2 1.2.2c2 0 3.6-1.3 3.9-3.2z"
        fill="#ef3120"
      />
      <path
        fillRule="evenodd"
        className="s4"
        fill="#fff"
        d="m17.8 12.6-.1-.1q-.2.4-.6.5c-.5.2-.9.2-1.3-.1l-.6.9q.3.1.5.2.9.4 1.9 0 .6-.3 1-.9zm-3.2.5c-.1-.1-.1-.2-.2-.3q-.3-.9 0-1.8c.2-.6.7-1.1 1.3-1.4.7-.3 1.5-.2 2.2.2q.7.4 1 1.2 0 .1.1.2zm1.4-2.5c-.5.2-.7.7-.7 1.2l2.2-.9c-.4-.5-.9-.6-1.5-.3zM20.5 8.3V13l.7.3-.4.9-.8-.3q-.3-.1-.4-.3-.2-.2-.2-.6V8.3zM22.3 11.8c0-.4.2-.8.5-1l-.7-.8c-.6.4-.9 1.1-.9 1.8s.3 1.4.8 1.8l.8-.8c-.3-.3-.5-.6-.5-1zM23.7 13.1q-.3 0-.5-.1l-.3 1.1q.4.1.8.1c1.1 0 2.1-.8 2.3-1.9l-1-.2c-.2.6-.7 1-1.3 1zM23.7 9.4q-.4 0-.8.1l.3 1h.5c.6 0 1.1.4 1.3 1l1-.2c-.2-1.1-1.2-1.9-2.3-1.9z"
      />
    </svg>
  )
}
