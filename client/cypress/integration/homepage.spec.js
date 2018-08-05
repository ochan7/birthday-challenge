/* eslint-disable*/
describe('App', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/api/birthdays');
    cy.visit('/');
  });
  it('Loads birthdays on page load', () => {
    cy.get('.list').should('have.length', 4);
  });
  it('should add a birthday and empty input fields', () => {
    cy.get('.text-input').type('bruce wayne');

    cy.get('.date-picker').type('1980-12-12');

    cy.get('.submit-btn').click();
    cy.server();
    cy.route('POST', '/api/birthdays');

    cy.get('.list').should('have.length', 5);

    cy.get('.text-input').should('contain', '');
  });

  it('has submit button disabled when name is not filled', () => {
    cy.get('.submit-btn')
      .should('be.disabled');
  });

  it('should delete a birthday', () => {
    cy.get('.list')
      .first()
      .as('first-birthday');

    cy.get('@first-birthday')
      .find('.delete-btn')
      .click();

   cy.get('.list')
    .should('have.length', 4);
  })
});
