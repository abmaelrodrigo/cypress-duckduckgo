

class DuckDuckGoSearchPage {

    searchForATerm(input) {
        cy.get('[id="searchbox_input"]')
            .type(`${input}{enter}`);
    }

    typeOnTheInputField(input) {
        cy.get('[id="searchbox_input"]')
            .type(`${input}`);

    }

    clickOnTheSearchButton() {
        cy.get('.searchbox_searchButton__F5Bwq')
            .click();

    }





}

export default new DuckDuckGoSearchPage();