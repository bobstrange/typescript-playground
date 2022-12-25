// treat this file as a module
export {}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-test attribute.
       * @example cy.dataTest('greeting')
       */
      dataTest(selectorName: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
