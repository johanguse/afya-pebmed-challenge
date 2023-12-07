import { describe, expect, it } from 'vitest'

import React from 'react'

import { render, screen } from '@testing-library/react'

import { InputErrorMessage } from '@/components/ui/input-error'

describe('InputErrorMessage', () => {
  it('displays the error message', () => {
    const testMessage = 'Error occurred'
    render(<InputErrorMessage message={testMessage} />)

    const errorMessage = screen.getByText(testMessage)
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('mt-1 text-xxs text-red-600')
  })
})
