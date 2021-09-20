describe('Complete code base of E2E test', () => {
  beforeEach(() => {
    cy.intercept('/api/data-bundle/home-page').as('homepage')
    cy.visit('https://www.executeautomation.com')
  })

  it('Launching EA website', () => {})

  it('XHR Testing', () => {
    cy.wait('@homepage')
      .its('response.statusCode')
      .should('be.oneOf', [200, 304])
  })
})
