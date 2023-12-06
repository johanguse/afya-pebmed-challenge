import { describe, expect, it } from 'vitest'

import { formatCurrency } from '@/lib/format/currency'

describe('formatCurrency', () => {
  it('formats currency correctly in BRL', () => {
    const value = 1234.56
    const formattedValue = formatCurrency(value, 'BRL')
    const expectedValue = 'R$ 1.234,56'.replace(' ', '\u00a0')
    expect(formattedValue).toBe(expectedValue)
  })
})
