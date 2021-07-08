describe("Feeback (step 3)", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=checkbox]').click()
    cy.get('[data-cy=step-1]').find('button.btn--submit').should('not.be.disabled')
    cy.get('button.btn--submit').click()
    cy.get('input[name="password1"]').type('123456789L{enter}')
    cy.get('input[name="password2"]').type('123456789L{enter}')
  })

  it("should has a cancel button and a submit button", () => {
    cy.get('[data-cy=step-3]').find('button.btn--cancel').should('have.attr', 'type', 'button')
    cy.get('[data-cy=step-3]').find('button.btn--submit').should('have.attr', 'type', 'submit')
  });

  it("should show a success modal when user clicks send and response is OK", () => {
    cy.get('button.btn--submit').click()
    cy.get('div.modal__text').should('exist');
    cy.get('div.modal__text').find('h2').contains('¡Tu password manager ya está creado!');
  });
})
