import { describe, expect, it } from 'vitest'

import React from 'react'

import { render, screen } from '@testing-library/react'

import { SkeletonSuccess } from '@/components/skeleton/skeleton-success'

describe('SkeletonSuccess', () => {
  it('renders correctly with three Skeleton divs', () => {
    render(<SkeletonSuccess />)

    const skeletonSuccessElement = screen.getByTestId('skeleton-success')
    expect(skeletonSuccessElement).toBeInTheDocument()

    const skeleton1 = screen.getByTestId('skeleton-1')
    expect(skeleton1).toHaveClass('mb-2 h-10 w-full bg-gray-200 py-6')
    const skeleton2 = screen.getByTestId('skeleton-2')
    expect(skeleton2).toHaveClass('mb-2 h-10 w-full bg-gray-200 py-6')
    const skeleton3 = screen.getByTestId('skeleton-3')
    expect(skeleton3).toHaveClass('mb-0 h-10 w-full bg-gray-200 py-6')
  })
})
