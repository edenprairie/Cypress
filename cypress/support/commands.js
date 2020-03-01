import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
    cy.visit('/#/login')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        cy.get('input[type = "email"]').type('qamilestone.academy@gmail.com')
        cy.get('input[type = "password"]').type('admin123')
        cy.root().submit()   // submits the form yielded from 'within'
    })
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
})


Cypress.Commands.add("NLXLogin", () => {
    cy.visit('https://qa-app.novologix.net/')
    cy.get('#userid').type('jun.wang@cvshealth.com')
    cy.get('#password').type('Test123456@')
    cy.get('[style="display: flex;justify-content: center; margin-left: -.5em;"] > .nlx-button').should('be.visible').click()
})