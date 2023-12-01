import { type VariantProps, cva } from 'class-variance-authority'

import React from 'react'

const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-blue',
        'text-white',
        'border-transparent',
        'hover:bg-blue-200',
      ],
    },
    size: {
      wfull: ['text-base', 'py-2', 'px-4', 'w-full'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'wfull', class: '' }],
  defaultVariants: {
    intent: 'primary',
    size: 'wfull',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />
