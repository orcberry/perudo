describe('test task', () => {

  it('tests', () => {
    cy.visit('localhost:4200')
    // cy.contains()
    cy.get('.play-action').click()
    cy.url().should('include', '/game');
  })

})