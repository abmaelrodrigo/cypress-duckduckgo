
class DuckDuckGoResultsPage {

    verifySearchResultQuery(input) {
        cy.get('[id="search_form_input"]')
            .should('have.attr', 'value', input);
    }

    verifyPageResultTitle(input) {
        cy.title().should('include', input);
    }

    verifyResultTitlesContainTheTerm(input) {
        cy.get(('[data-testid="result-title-a"]')).each(title => {
            cy.wrap(title).then($prop => {
                expect(($prop[0].innerText).toLowerCase()).to.contain(input.toLowerCase());

            })

        })
    }

    clickOnMoreResultsButton() {
        cy.get('[id="more-results"]')
            .click();
    }




}

export default new DuckDuckGoResultsPage();