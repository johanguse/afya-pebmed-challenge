import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_MOCK_API_URL: z
      .string()
      .url('ERRO: NEXT_PUBLIC_MOCK_API_URL not valid')
      .min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_MOCK_API_URL: process.env.NEXT_PUBLIC_MOCK_API_URL,
  },
})
