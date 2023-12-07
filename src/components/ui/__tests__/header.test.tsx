import { describe, expect, it, vi } from 'vitest'

import React from 'react'

import { render, screen } from '@testing-library/react'

import { Header } from '@/components/header'

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }) => <img src={src} alt={alt} />,
}))

describe('Header', () => {
  it('renders the icon arrow and the logo image', () => {
    render(<Header />)

    const logo = screen.getByAltText('logo W')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/images/logo_w.svg')
  })
})
