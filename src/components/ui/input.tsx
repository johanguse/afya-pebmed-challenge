import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & { label: string }
>(({ className, type, label, id, ...props }, ref) => {
  return (
    <div className="mb-8 flex flex-col">
      <label htmlFor={id} className="text-xs text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={cn(
          'w-full border-b-1 border-gray-50 py-2 text-base text-gray-300 outline-none placeholder:text-gray-200 focus:border-gray-300',
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
Input.displayName = 'Input'

export { Input }
