describe("Newsletter subscribe form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it.only("allows users to subscribe to email list", () => {
    const email = "john-doe@aaa.bbb.ccc.dddd.com"
    cy.dataTest("email-input").type(email)
    cy.dataTest("submit-button").click()
    cy.dataTest("success-message").should("exist").contains(`${email}`)
  })
})
