import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../pages/homepage";

Given("User is at the login page", () => {
  homePage.goToHomePage();
});

And("User verifies the title as {string}", title => {
  homePage.verifyTitle(title);
});

And("User verifies the url as {string}", url => {
  homePage.verifyURL(url);
});

Then("User is able to see the list of festivals", () => {
  homePage.getListOfFestivals();
});
