import { describe, expect, it } from 'vitest'

import React from 'react'

import { render, screen } from '@testing-library/react'

import { Skeleton } from '@/components/ui/skeleton'

describe('Skeleton', () => {
  it('renders correctly and applies given class names', () => {
    const testClassName = 'test-class'
    render(<Skeleton className={testClassName} data-testid="skeleton" />)

    const skeletonElement = screen.getByTestId('skeleton')
    expect(skeletonElement).toBeInTheDocument()
    expect(skeletonElement).toHaveClass('bg-muted')
    expect(skeletonElement).toHaveClass('animate-pulse')
    expect(skeletonElement).toHaveClass('rounded-md')
    expect(skeletonElement).toHaveClass(testClassName)
  })
})
