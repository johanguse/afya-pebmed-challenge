import * as formik from 'formik'
import { describe, expect, it, vi } from 'vitest'

import React from 'react'

import { render, screen } from '@testing-library/react'

import { Select } from '@/components/ui/select'

describe('Select', () => {
  it('renders correctly with options', () => {
    const useFieldMock = vi.spyOn(formik, 'useField').mockReturnValue([
      {
        name: 'test-select',
        value: '',
        onChange: vi.fn(),
        onBlur: vi.fn(),
      },
      {
        value: '',
        touched: false,
        error: '',
        initialTouched: false,
      },
      {
        setValue: vi.fn(),
        setTouched: vi.fn(),
        setError: vi.fn(),
      },
    ])

    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ]

    render(
      <Select
        label="Test Select"
        id="test-select"
        placeholder="Select an option"
        options={options}
      />
    )

    expect(screen.getByLabelText('Test Select')).toBeInTheDocument()
    expect(screen.getByText('Select an option')).toBeInTheDocument()

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument()
    })

    useFieldMock.mockRestore()
  })

  it('displays an error when present', () => {
    const errorMessage = 'This field is required'
    const useFieldMock = vi.spyOn(formik, 'useField').mockReturnValue([
      {
        name: 'test-select',
        value: '',
        onChange: vi.fn(),
        onBlur: vi.fn(),
      },
      {
        value: '',
        touched: true,
        error: errorMessage,
        initialTouched: false,
      },
      {
        setValue: vi.fn(),
        setTouched: vi.fn(),
        setError: vi.fn(),
      },
    ])

    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ]

    render(
      <Select
        label="Test Select"
        id="test-select"
        placeholder="Select an option"
        options={options}
      />
    )

    expect(screen.getByText(errorMessage)).toBeInTheDocument()

    useFieldMock.mockRestore()
  })
})
