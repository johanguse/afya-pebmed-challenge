import { describe, expect, it } from 'vitest'

import { formatPercentage } from '@/lib/format/percent'

describe('formatPercentage', () => {
  it('formats percentage correctly', () => {
    const value = 0.1234
    const formattedPercentage = formatPercentage(value)
    expect(formattedPercentage).toBe('12.34%')
  })
})
