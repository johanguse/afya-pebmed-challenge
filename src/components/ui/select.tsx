import React from 'react'

export type Option = {
  label: string
  value: string
}

type Props = {
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
}: Props) {
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
      <select id={id} name={id} defaultValue="" className={selectClasses}>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {renderOptions}
      </select>
    </div>
  )
}
