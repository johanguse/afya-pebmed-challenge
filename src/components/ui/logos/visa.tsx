import React from 'react'

type LogoVisaProps = React.SVGProps<SVGSVGElement> & {
  width?: number
  height?: number
}

export function LogoVisa({ width, height, ...props }: LogoVisaProps) {
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
        d="M-.2 1.9C-.2.9.6.1 1.6.1h28.6c1 0 1.8.8 1.8 1.8v19.3c0 1-.8 1.8-1.8 1.8H1.6c-1 0-1.8-.8-1.8-1.8z"
        fill="#f3f3f3"
      />
      <path
        fillRule="evenodd"
        className="s1"
        d="m12.6 14.4 1-5.7H15l-.9 5.7zM19.4 8.8q-.6-.2-1.3-.2c-1.4 0-2.5.8-2.5 1.9 0 .8.8 1.3 1.3 1.5.6.3.8.5.8.7 0 .4-.5.6-.9.6q-.7 0-1.4-.3l-.2-.1-.2 1.3q.8.3 1.7.3c1.5 0 2.5-.8 2.5-2 0-.6-.4-1.1-1.2-1.5-.5-.3-.8-.4-.8-.7 0-.3.2-.5.8-.5q.6 0 1.1.2l.1.1.2-1.2zM23.2 8.7h-1.1c-.4 0-.7.1-.8.5l-2.2 5.2h1.6l.3-.9h1.8c.1.2.2.9.2.9h1.4l-1.2-5.7zm-1.8 3.7c.1-.4.6-1.6.6-1.6l.2-.6.1.5s.2 1.4.3 1.7zM11.4 8.7 10 12.6l-.2-.8c-.2-.9-1.1-1.9-2-2.4l1.3 5h1.6L13 8.7z"
        fill="#00529b"
      />
      <path
        fillRule="evenodd"
        className="s2"
        d="M8.6 8.7H6.3v.1c1.8.5 3 1.6 3.5 3l-.5-2.6c-.1-.4-.3-.5-.7-.5zM32 17.2H-.2v4.2c0 1 .8 1.8 1.8 1.8h28.6c1 0 1.8-.8 1.8-1.8z"
        fill="#f5ab00"
      />
      <path
        fillRule="evenodd"
        className="s1"
        d="M30.2 0H1.6C.6 0-.2.8-.2 1.8v4H32v-4c0-1-.8-1.8-1.8-1.8z"
        fill="#00529b"
      />
    </svg>
  )
}
