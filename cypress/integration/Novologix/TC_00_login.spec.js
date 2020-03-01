describe('Login', function () {
    it('Sign in', function () {
        cy.visit(Cypress.env('QABaseURL'))
        cy.get('#userid').type('jun.wang@cvshealth.com')
        cy.get('#password').type('Test123456@')
        cy.get('[style="display: flex;justify-content: center; margin-left: -.5em;"] > .nlx-button').should('be.visible').click()
    })
})