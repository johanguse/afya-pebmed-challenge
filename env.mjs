import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SUBSCRIPTION_API_URL: z.string().url().min(1),
    NEXT_PUBLIC_OFFER_API_URL: z.string().url().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SUBSCRIPTION_API_URL:
      process.env.NEXT_PUBLIC_SUBSCRIPTION_API_URL,
    NEXT_PUBLIC_OFFER_API_URL: process.env.NEXT_PUBLIC_OFFER_API_URL,
  },
})
