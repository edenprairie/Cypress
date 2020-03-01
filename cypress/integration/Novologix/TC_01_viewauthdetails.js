describe('View auth details', function () {

    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
       cy.NLXLogin()
    })

    it('View Auth Details', function () {
        cy.get('[row-index="4"] > .ag-cell-last-left-pinned > a').click()
        cy.get('.modal-headerAlert > div').should('contain', 'Your Authorization')
        
        cy.url().should('include', 'authorization/show')
        cy.wait()
        cy.get('[formarrayname="requestedcycles"] > auth-regimen-cycle > [style="border : 1px solid #ddd; border-radius : 4px; padding: 5px;"] > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > auth-regimen-di > fieldset > :nth-child(3) > .col-md-12 > :nth-child(2) > auth-regimen-di-dose > :nth-child(1) > [style="width:8%"] > nlx-custom-input > div.ng-untouched > .nlx-control').should('contain', '840')
    })

    // it('Mark-unmark as favorite', function () {
    //     cy.get('ul.navbar-nav').children().contains('QAMs').click()
    //     cy.contains('My Articles').should('be.visible')
    //     cy.get('.ion-heart').first().click()
    //     cy.contains('Favorited Articles').click()
    //     cy.url().should('include', 'favorites')
    //     cy.get('.ion-heart').first().click()
    //     cy.reload()
    //     cy.contains('No articles are here... yet.').should('be.visible')
    //     cy.go('back')
    // })
})