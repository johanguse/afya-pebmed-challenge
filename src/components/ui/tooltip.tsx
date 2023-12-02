'use client'

import React, { ReactNode, useState } from 'react'

export const Tooltip = ({
  message,
  children,
  className,
}: {
  message: string
  children: ReactNode
  className?: string
}) => {
  const [show, setShow] = useState(false)
  return (
    <div className={`group relative flex flex-col items-center ${className}`}>
      <span
        className="flex justify-center"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      <div
        className={`absolute bottom-full flex flex-col items-center whitespace-nowrap  group-hover:flex ${
          !show ? 'hidden' : ''
        }`}
      >
        <span className="whitespace-no-wrap relative z-10 rounded-md bg-gray-600 p-2 text-xs leading-none text-white shadow-lg">
          {message}
        </span>
        <div className="-mt-2 h-3 w-3 rotate-45 bg-gray-600" />
      </div>
    </div>
  )
}
