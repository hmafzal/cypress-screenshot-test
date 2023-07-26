/// <reference types="cypress" />
import compareSnapshotCommand from "cypress-image-diff-js/dist/command";

describe("Snapshot test with Cypress", () => {
  beforeEach(() => {
    cy.visit("https://docs.merge.dev/");
  });

  xit("Take the snapshot of a result", () => {
    /* In here the snapshot that is taken will be refered and accepted by tester and, only after that 
    we can use that snapshot as an comparison component for the test*/
    cy.visit("https://bstackdemo.com/");

    cy.get("#signin").click();

    cy.get("#login-btn").snapshot(); //This snapshot will be refered and compared everytime this runs

    cy.get("#login-btn").click();
  });

  it("Take the screenshot of a result", () => {
    /* In here the snapshot that is taken will be refered and accepted by tester and, only after that 
    we can use that snapshot as an comparison component for the test*/
    cy.visit("https://docs.merge.dev/");
    cy.wait(1000);
    cy.compareSnapshot("home-page", 0.1);
  });
});
