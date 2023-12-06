import { useField } from 'formik'

import React from 'react'

import { InputErrorMessage } from '@/components/ui/input-error'

export type Option = {
  label: string
  value: string
}

type SelectProps = React.InputHTMLAttributes<HTMLSelectElement> & {
  label: string
  id: string
  placeholder: string
  options: Option[]
  className?: string
}

export function SelectField({
  label,
  id,
  placeholder,
  options,
  className,
  ...props
}: SelectProps) {
  const [field, meta] = useField(id)

  const renderOptions = React.useMemo(
    () =>
      options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      )),
    [options]
  )

  const selectClasses = `border-b-1 border-gray-50 focus:border-gray-300 w-full bg-white py-2 text-base text-gray-200 outline-none placeholder:text-gray-200 ${
    className || ''
  }`

  return (
    <div className={`mb-8 flex flex-col ${className || ''}`}>
      <label htmlFor={id} className="text-xs text-gray-300">
        {label}
      </label>
      <select {...field} id={id} name={id} className={selectClasses} {...props}>
        <option value="-1" disabled hidden>
          {placeholder}
        </option>
        {renderOptions}
      </select>
      {meta.touched && meta.error ? (
        <InputErrorMessage message={meta.error} />
      ) : null}
    </div>
  )
}
