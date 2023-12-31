describe('Login', function () {
  it('should login with valid credentials', function () {
    cy.visit('/login');

    cy.get('[data-testId=email]').type(Cypress.env('user_email'));
    cy.get('[data-testId=password]').type(Cypress.env('user_password'));

    cy.contains('Entrar').click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/bbq`);
  });
});
