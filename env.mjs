import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    NEXTAUTH_URL: z.string().url().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_SUBSCRIPTION_API_URL: z.string().url().min(1),
    NEXT_PUBLIC_OFFER_API_URL: z.string().url().min(1),
  },
  runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SUBSCRIPTION_API_URL:
      process.env.NEXT_PUBLIC_SUBSCRIPTION_API_URL,
    NEXT_PUBLIC_OFFER_API_URL: process.env.NEXT_PUBLIC_OFFER_API_URL,
  },
})
