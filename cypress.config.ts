import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1280,
  env: {
    mobileViewportWidthBreakpoint: 414,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
