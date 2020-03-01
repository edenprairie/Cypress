describe('View auth details', function () {

    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
        cy.NLXLogin()
    })

    it('View Auth Details', function () {
        cy.get('[row-index="4"] > .ag-cell-last-left-pinned > a').click()
        cy.get('.modal-headerAlert > div').should('contain', 'Your Authorization')

        cy.url().should('include', 'authorization/show')

        cy.get('#btnCopy', { timeout: 30000 }).should('be.visible').click()
        cy.get('#modalid > .modal-content > .modal-footer > .nlx-button-positive').should('be.visible').click()
        cy.get('.injectableSection > form.ng-untouched > :nth-child(1) > .form-group > .col-md-7 > nlx-calendar > div.ng-untouched > [style="white-space:nowrap;"] > span.nlx-label', { timeout: 30000 }).click()
        cy.get('.injectableSection > form.ng-pristine > :nth-child(1) > .form-group > .col-md-7 > nlx-calendar > div.ng-pristine > .ui-dropdown-panel > :nth-child(1) > div > :nth-child(2)').click()
        cy.get('.col-md-7 > nlx-calendar > .ng-invalid > .ui-dropdown-panel > [style="width:100%; height:25px; padding-left:5px; padding-right:5px; padding-top:2px; margin-bottom:10px;"] > :nth-child(2)').click()
        cy.get('.col-md-7 > div > .ui-inputtext').select('Normal')
        cy.get(':nth-child(3) > .col-md-12 > [style="display:inline-block;"] > :nth-child(1) > .ui-inputtext').select('Office')
        cy.get('.src-panelShadow > div.ng-untouched > [style="white-space:nowrap;"] > .nlx-control').type('Perjeta')
        cy.get('.src-panelShadow > div.ng-untouched > [style="white-space:nowrap;"] > .nlx-label > .fa').click()
        //cy.get('.src-panelShadow > div.ng-untouched > [style="white-space:nowrap;"] > .nlx-control').select()
        cy.get('[style="line-height:20px;width:12%;text-align:left;"]').click()
        cy.get('#btnSave').should('be.visible').click()
        cy.get('#btnSubmitAuthorization').should('be.visible')

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