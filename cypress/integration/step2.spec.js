describe("Form (step 2)", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=checkbox]').click()
    cy.get('[data-cy=step-1]').find('button.btn--submit').should('not.be.disabled')
    cy.get('button.btn--submit').click()
  })

  it("should contains a form", () => {
    cy.get('[data-cy=step-2]').find('form')
  });

  it("has three inputs with their labels", () => {
    cy.get('form').find('[data-cy=password1]').find('label').contains('Crea tu contraseña maestra')
    cy.get('form').find('[data-cy=password2]').find('label').contains('Repite tu contraseña maestra')
    cy.get('form').find('[data-cy=clue]').find('label').contains('Crea tu pista para recordar tu contraseña (Opcional)')
  })

  it('should show error when the user types a password without capital letter', () => {
    cy.get('input[name="password1"]').type('123456789{enter}')
    cy.get('span.input__error').should('exist');
    cy.get('span.input__error').contains('La contraseña debe tener una mayúscula');
    cy.get('span.input__error').contains('Las contraseñas no son iguales');
  })

  it('should show error when the user types two different passwords', () => {
    cy.get('input[name="password1"]').type('123456789L{enter}')
    cy.get('input[name="password2"]').type('12345678{enter}')
    cy.get('span.input__error').should('exist');
    cy.get('span.input__error').contains('Las contraseñas no son iguales');
  })

  it('should show error when the user submit form with empty inputs', () => {
    cy.get('[data-cy=form]').submit()
    cy.get('span.input__error').should('exist');
    cy.get('span.input__error').contains('La contraseña debe tener una mayúscula');
    cy.get('span.input__error').contains('Debes repetir la contraseña');
  })

  it("should check if the user types the passwords well, can continue to step 3", () => {
    cy.get('input[name="password1"]').type('123456789L{enter}')
    cy.get('input[name="password2"]').type('123456789L{enter}')
    cy.get('[data-cy=manager]').find('[data-cy=step-3]')
  });
});