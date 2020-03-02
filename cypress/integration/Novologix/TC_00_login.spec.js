describe('Login', function () {
    it('Sign in', function () {
        cy.visit(Cypress.env('QABaseURL'))
        cy.get('#userid').type('jun.wang@cvshealth.com')
        cy.get('#password').type('Test123456@')
        cy.get('[style="display: flex;justify-content: center; margin-left: -.5em;"] > .nlx-button', { timeout: 30000 }).should('be.visible').click()
        cy.get('.searchHeader > :nth-child(1)').should('be.visible', { timeout: 30000 }).should('contain', 'WorkBox Items')


        cy.get('#ctl00_ddlAppName_Arrow').click()
        cy.get('.rcbList > :nth-child(8)').should('be.visible').click({ timeout: 30000 })

    })

    it('Select Applicaiton', () => {
        cy.get('.searchHeader > :nth-child(1)').should('be.visible', { timeout: 30000 }).should('contain', 'WorkBox Items')
        // cy.get('#ctl00_ddlAppName_Arrow').click()
        // cy.get('.rcbList > :nth-child(8)').should('be.visible').click()
        cy.get('[style="width: 90px; left: 150px;"] > .ag-floating-filter-body > .ag-input-wrapper > .ag-floating-filter-input').type('433669{enter}')
        cy.get('.ag-cell-last-left-pinned > a').first().click()
    })
})