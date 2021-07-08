describe("Manager", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  it("should contains Header,main title and Product info (step 1)", () => {
    cy.get('[data-cy=manager]').find('[data-cy=header]')
    cy.get('[data-cy=manager]').find('h1').contains('Crea tu Password Manager');
    cy.get('[data-cy=manager]').find('[data-cy=step-1]')
  });
});