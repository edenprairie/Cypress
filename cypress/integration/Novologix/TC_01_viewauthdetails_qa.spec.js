describe("Copy auth from existing one", function () {
  Cypress.config("pageLoadTimeout", 100000);

  before(function () {
    cy.NLXQALogin();
  });

  it("View Auth Details - Copy auth - Save auth", () => {
    //cy.get('[row-index="1"] > .ag-cell-last-left-pinned > a').click();
    cy.get(':nth-child(2) > .rmRootLink > .rmText', {
      timeout: 30000
    }).click();
    cy.get('[style="z-index: 6;"] > .rmSlide > .rmVertical > .rmFirst > .rmLink > .rmText').click();
    cy.get('#ctl00_PlaceHolderMainContent_txtAuthorizationTransactionIdentifier').click();
    cy.get('#ctl00_PlaceHolderMainContent_txtAuthorizationTransactionIdentifier').type('547017')
    cy.get('#ctl00_PlaceHolderMainContent_btnSearchAuths > [tabindex="0"]').click();
    cy.get('#ctl00_PlaceHolderMainContent_grdResults_ctl00__0 > :nth-child(1) > a').should("be.visible").click();
    //cy.get('.ag-cell-last-left-pinned > a').click();
    //cy.get('[style="width: 90px; left: 150px;"] > .ag-floating-filter-body > .ag-input-wrapper > .ag-floating-filter-input', { timeout: 30000 }).type('431478{enter}')

    //cy.get('.ag-cell-last-left-pinned > a').should('contain', '431478', { timeout: 2000 }).first().click()

    cy.get(".modal-headerAlert > div").should("contain", "Your Authorization");
    cy.url().should("include", "authorization/show");
    cy.get("#btnCopy", {
      timeout: 30000
    }).should("be.visible").click();
    cy.get("#modalid > .modal-content > .modal-footer > .nlx-button-positive", {
      timeout: 30000
    }).should("be.visible").click();

    cy.get('.injectableSection > form.ng-untouched > :nth-child(1) > .form-group > .col-md-7 > nlx-calendar > div.ng-untouched > [style="white-space:nowrap;"] > span.nlx-label', {
      timeout: 30000
    }).click();
    cy.get(".injectableSection > form.ng-pristine > :nth-child(1) > .form-group > .col-md-7 > nlx-calendar > div.ng-pristine > .ui-dropdown-panel > :nth-child(1) > div > :nth-child(2)").click();
    cy.get('.col-md-7 > nlx-calendar > .ng-invalid > .ui-dropdown-panel > [style="width:100%; height:25px; padding-left:5px; padding-right:5px; padding-top:2px; margin-bottom:10px;"] > :nth-child(2)').click();
    cy.get(".col-md-7 > div > .ui-inputtext").select("Normal");
    cy.get(':nth-child(3) > .col-md-12 > [style="display:inline-block;"] > :nth-child(1) > .ui-inputtext').select("Office");
    cy.get('.src-panelShadow > div.ng-untouched > [style="white-space:nowrap;"] > .nlx-control').clear().type("Perjeta");
    cy.get('.src-panelShadow > div.ng-untouched > [style="white-space:nowrap;"] > .nlx-label > .fa').click();

    cy.get('[style="line-height:20px;width:12%;text-align:left;"]').click();
    cy.get("#btnSave", {
      timeout: 30000
    }).should("be.visible").should("not.be.disabled").click();
    cy.get("#btnSubmitAuthorization", {
      timeout: 30000
    }).should("be.visible");
    cy.get("#btnSubmitAuthorization").click();

    cy.get("stages-select > .row > .selectPadding > .ui-inputtext", {
      timeout: 30000
    }).select("Stage II");
    cy.get("indications-select > .row > .selectPadding > .ui-inputtext").select("Adjuvant");

    cy.get('.ui-multiselect-label').click();
    cy.get(':nth-child(3) > .ui-chkbox > .ui-chkbox-box').click();
    cy.get('.ui-multiselect-label').click();
    cy.get("performance-select > .row > .selectPadding > .ui-inputtext").select("eCOG-2");
    cy.get(":nth-child(2) > .col-md-12 > .ng-dirty > .ng-untouched").check();
    cy.get(":nth-child(3) > .col-md-12 > .ng-dirty > .ng-untouched").check();
    cy.get('#btnContinue').click();
    cy.get(':nth-child(3) > .data-table-row > :nth-child(9) > a.ng-star-inserted').click();
    cy.get(':nth-child(1) > [style="width:80%"] > .blueText').click();
    cy.get('#modalid > .modal-content > .modal-header').should("include", "NCCN Recommended Use");
  });
});