import { describe, expect, it } from 'vitest'

import React from 'react'

import { render, screen } from '@testing-library/react'

import { SkeletonPlans } from '@/components/skeleton/skeleton-plans'

describe('SkeletonPlans', () => {
  it('renders correctly with the skeleton-plans container and two Skeleton divs', () => {
    render(<SkeletonPlans />)

    const skeletonPlansElement = screen.getByTestId('skeleton-plans')
    expect(skeletonPlansElement).toBeInTheDocument()

    const skeleton1 = screen.getByTestId('skeleton-1')
    expect(skeleton1).toHaveClass('mb-2 h-24 w-full bg-gray-200 py-6')
    const skeleton2 = screen.getByTestId('skeleton-2')
    expect(skeleton2).toHaveClass('mb-0 h-24 w-full bg-gray-200 py-6')
  })
})
