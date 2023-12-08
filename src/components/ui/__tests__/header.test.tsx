import { describe, expect, it } from 'vitest'

import React from 'react'

import { render, screen } from '@testing-library/react'

import { Header } from '@/components/header'

describe('Header', () => {
  it('renders correctly and applies given class names', () => {
    render(<Header />)

    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveClass('flex')
    expect(headerElement).toHaveClass('items-center')
    expect(headerElement).toHaveClass('p-4')
    expect(headerElement).toHaveClass('lg:px-16')
    expect(headerElement).toHaveClass('lg:py-8')
  })
})
