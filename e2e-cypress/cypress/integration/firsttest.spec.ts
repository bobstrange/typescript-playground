describe('Complete code base of E2E test', () => {
  beforeEach(() => {
    cy.intercept('/api/data-bundle/home-page').as('homepage')
    cy.visit('https://www.executeautomation.com')
  })

  it('Launching EA website', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.ct-header-content > .ct-ul > :nth-child(3) > a').click();
    cy.get('.ct-btn-blue').click();
    cy.get('.swal-button').click();
    /* ==== End Cypress Studio ==== */
  })

  it('XHR Testing', async () => {
    cy.wait('@homepage')
      .its('response.statusCode')
      .should('be.oneOf', [200, 304])
    cy.wait('@homepage').then(({ response }) => {
      expect(response.body.courses).to.above(20)
      expect(response.body.courses[0]).to.have.property(
        'title',
        'Selenium Grid with Docker'
      )
    })
  })
})
