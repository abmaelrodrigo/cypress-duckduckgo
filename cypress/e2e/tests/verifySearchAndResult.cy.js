/// <reference types="cypress" />

import resultPage from "../pages/resultPage";
import searchPage from "../pages/searchPage";


context("Verify basic searches on the Duck Duck Go website", () => {
    beforeEach(() => {
        cy.visit('https://www.duckduckgo.com');
    })

    var searchTems = ["panda", "Selenium", "API"];

    it('Verify search for a phrase', () => {
        // Given the DuckDuckGo home page is displayed

        // When the user searches for the phrase
        searchPage.searchForATerm(searchTems[0]);

        // Then the search result query is the phrase
        resultPage.verifySearchResultQuery(searchTems[0]);

        // And the search result SEO title contains the phrase
        resultPage.verifyPageResultTitle(searchTems[0]);

        // And each search result title pertain to the phrase
        resultPage.verifyResultTitlesContainTheTerm(searchTems[0]);

    })

    it('Verify search by clicking on the search button', () => {
        // Given the DuckDuckGo home page is displayed

        // When the user types on the search field
        searchPage.typeOnTheInputField(searchTems[1]);

        // And click on the search button
        searchPage.clickOnTheSearchButton();

        // Then the search result query is the phrase
        resultPage.verifySearchResultQuery(searchTems[1]);

        // And the search result SEO title contains the phrase
        resultPage.verifyPageResultTitle(searchTems[1]);

        // And each search result title pertain to the phrase
        resultPage.verifyResultTitlesContainTheTerm(searchTems[1]);

    })

    it.only('Verify click on More Results button', () => {

        // Given the user is on the search result page (the query is the phrase)
        searchPage.searchForATerm(searchTems[2]);
        resultPage.verifySearchResultQuery(searchTems[2]);

        // When the user clicks on More Results button
        resultPage.clickOnMoreResultsButton();

        // Then the search result SEO title contains the phrase
        resultPage.verifyPageResultTitle(searchTems[2]);

        // And each search result title pertain to the phrase
        resultPage.verifyResultTitlesContainTheTerm(searchTems[2]);

    })
})