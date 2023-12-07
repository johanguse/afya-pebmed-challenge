import { describe, expect, it } from 'vitest'

import { formatCPF } from '@/lib/format/cpf'

describe('formatCPF', () => {
  it('formats a valid CPF', () => {
    const cpfNumbers = '12345678909'

    const formattedCPF = formatCPF(cpfNumbers)

    expect(formattedCPF).toBe('123.456.789-09')
  })

  it('formats a valid CPF with extra characters', () => {
    const cpfNumbers = 'abc123.456.789-09def'

    const formattedCPF = formatCPF(cpfNumbers)

    expect(formattedCPF).toBe('123.456.789-09')
  })

  it('handles an empty input', () => {
    const cpfNumbers = ''

    const formattedCPF = formatCPF(cpfNumbers)

    expect(formattedCPF).toBe('')
  })

  it('handles an input with only non-digit characters', () => {
    const cpfNumbers = 'abcde'

    const formattedCPF = formatCPF(cpfNumbers)

    expect(formattedCPF).toBe('')
  })
})
