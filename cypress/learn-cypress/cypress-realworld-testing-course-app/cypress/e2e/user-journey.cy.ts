describe("User journey", () => {
  it("a user can find a course on a home page and complete the course lessons", () => {
    cy.visit("http://localhost:3000")
    cy.dataTest("course-0").find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")

    cy.dataTest("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )

    cy.dataTest("challenge-answer-0").click()
    cy.dataTest("next-lesson-button").click()

    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )

    cy.dataTest("challenge-answer-0").click()
    cy.dataTest("next-lesson-button").click()

    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )

    cy.dataTest("challenge-answer-0").click()
    cy.dataTest("next-lesson-button").click()

    cy.location("pathname").should("eq", "/")
  })
})
