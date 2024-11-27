// This is an example test
describe("Google Search Test", () => {
  it("Accept cookies and search for a term", () => {
    cy.visit("https://google.com");
    cy.contains("Before you continue to Google").should("be.visible");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get(".gLFyf").type("John Rambo").type("{enter}");
    cy.get(
      ':nth-child(1) > .MjjYud > .g > .srKDX > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb'
    ).should("be.visible");
  });
});
