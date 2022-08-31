/// <reference types="cypress" />

describe('Snapshot test with Cypress', () => {
  beforeEach(() => {
    cy.visit('https://bstackdemo.com')
  })

  it('Take the snapshot of a result', () => {
    /* In here the snapshot that is taken will be refered and accepted by tester and, only after that 
    we can use that snapshot as an comparison component for the test*/
    cy.visit('https://bstackdemo.com/')

    cy.get("#signin").click();

    cy.get("#login-btn").snapshot(); //This snapshot will be refered and compared everytime this runs


    cy.get("#login-btn").click();



  })

})
