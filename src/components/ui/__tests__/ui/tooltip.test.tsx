import { describe, expect, it, vi } from 'vitest'

import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Tooltip } from '@/components/ui/tooltip'

describe('Tooltip', () => {
  it('shows and hides tooltip message on hover', async () => {
    render(
      <Tooltip message="Test Tooltip">
        <div>Hover over me</div>
      </Tooltip>
    )

    const hoverArea = screen.getByText('Hover over me')
    fireEvent.mouseEnter(hoverArea)

    await vi.waitFor(() => {
      const tooltipDiv = screen.getByText('Test Tooltip').closest('div')
      expect(tooltipDiv).not.toHaveClass('hidden')
    })

    fireEvent.mouseLeave(hoverArea)

    await vi.waitFor(() => {
      const tooltipDiv = screen.getByText('Test Tooltip').closest('div')
      expect(tooltipDiv).toHaveClass('hidden')
    })
  })
})
