import React from 'react'

type IconArrowLeftProps = React.SVGProps<SVGSVGElement> & {
  width?: number
  height?: number
}

export function IconArrowLeft({ width, height, ...props }: IconArrowLeftProps) {
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
        className="fill-black"
        fillRule="evenodd"
        d="M6.358 12.735.195 6.941a.597.597 0 0 1 0-.882L6.358.265a1.006 1.006 0 0 1 1.36 0 .867.867 0 0 1 0 1.278L2.446 6.5l5.272 4.956a.868.868 0 0 1 0 1.28 1.006 1.006 0 0 1-1.36 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
