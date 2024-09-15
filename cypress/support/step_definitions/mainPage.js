import OpenSite from "../page_object/openSite";
import MainPage from "../page_object/mainPage";
import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";

const openSite = new OpenSite();
const mainPage = new MainPage();

Given("I open the main page", function () {
    openSite.visit();
    Cypress.on(`uncaught:exception`,(err,runnable) =>{
        return false;
    });
    Then("The url should be correct", function () {
        mainPage.classCheckUrl();
    });

})