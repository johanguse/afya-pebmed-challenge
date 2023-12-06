import { useFormikContext } from 'formik'

import React from 'react'
import InputMask from 'react-input-mask'

import { InputErrorMessage } from '@/components/ui/input-error'

import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  id: string
  label: string
  mask?: string
  placeholder?: string
  error?: string | false | undefined
}

export function InputField({
  name,
  id,
  label,
  mask,
  placeholder,
  error,
  ...inputProps
}: InputProps) {
  const { getFieldProps, touched, errors } = useFormikContext<any>()

  const commonClasses =
    'border-b-1 border-gray-50 focus:border-gray-300 w-full bg-white py-2 text-base text-gray-300 outline-none placeholder:text-gray-200'

  const inputField = mask ? (
    <InputMask
      mask={mask}
      maskChar={null}
      id={name}
      placeholder={placeholder}
      className={cn(commonClasses, {
        'border-b-rose-500': touched[name] && errors[name],
      })}
      {...getFieldProps(name)}
      {...inputProps}
    />
  ) : (
    <input
      type="text"
      id={name}
      placeholder={placeholder}
      className={cn(commonClasses, {
        'border-b-rose-500': touched[name] && errors[name],
      })}
      {...getFieldProps(name)}
      {...inputProps}
    />
  )

  const formikErrorMessage =
    touched[name] && errors[name] ? (errors[name] as string) : null
  const finalErrorMessage = error || formikErrorMessage

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-xs text-gray-300">
          {label}
        </label>
      )}
      <div className="form-control w-full">
        {inputField}
        {finalErrorMessage && <InputErrorMessage message={finalErrorMessage} />}
      </div>
    </div>
  )
}
