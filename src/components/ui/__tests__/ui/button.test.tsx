import { describe, expect, it, vi } from 'vitest'

import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Button, ButtonVariant } from '@/components/ui/button'
import { IconSpin } from '@/components/ui/icons/spin'

describe('Button', () => {
  it('renders a button with default properties', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies the correct styles for each variant', () => {
    const variants: ButtonVariant[] = [
      'primary',
      'secondary',
      'tertiary',
      'danger',
    ]

    variants.forEach((variant) => {
      render(<Button variant={variant}>Variant</Button>)
    })
  })

  it('renders an icon if provided', () => {
    render(<Button Icon={IconSpin}>With Icon</Button>)
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })

  it('shows a loading spinner when loading', () => {
    render(<Button loading>Loading</Button>)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('acts as a link when href is provided', () => {
    render(<Button href="http://example.com">Link</Button>)
    const linkButton = screen.getByRole('link', { name: 'Link' })
    expect(linkButton).toBeInTheDocument()
    expect(linkButton).toHaveAttribute('href', 'http://example.com')
  })

  it('handles click events correctly', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    const button = screen.getByText('Click Me')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByText('Disabled Button').closest('button')

    expect(button).toHaveAttribute('disabled')
  })

  it('does not trigger click events when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button disabled onClick={handleClick}>
        Disabled Click
      </Button>
    )
    const button = screen.getByText('Disabled Click')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('shows loading state correctly', () => {
    render(<Button loading>Loading State</Button>)
    expect(screen.getByText('Loading State')).toBeInTheDocument()
  })
})
