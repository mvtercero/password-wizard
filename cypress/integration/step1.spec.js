describe("Product info view (step 1)", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it("should render a div with product info", () => {
    cy.get('[data-cy=step-1]').find('div').should('have.class', 'product-info__group')
  });

  it("should check if the checkbox is uncheck and the next button disabled", () => {
    cy.get('[data-cy=step-1]').find('div').should('have.class', 'product-info__terms-conditions').find('[type="checkbox"]').uncheck();
    cy.get('[data-cy=step-1]').find('button.btn--disabled').should('be.disabled')
  });

  it("should check if the user clicks the checkbox, the button goes to the next step", () => {
    cy.get('[data-cy=checkbox]').click()
    cy.get('[data-cy=step-1]').find('button.btn--submit').should('not.be.disabled')
    cy.get('button.btn--submit').click()
    cy.get('[data-cy=manager]').find('[data-cy=step-2]')
  });
});