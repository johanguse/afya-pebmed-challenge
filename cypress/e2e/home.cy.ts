//create e2e test to nextjs home page
// @ts-nocheck
// e2e test for Next.js home page
describe('Next.js Home Page', () => {
  it('should render the home page', () => {
    cy.visit('/')
    cy.contains('Get started by editing src/app/page.tsx')
  })
})
