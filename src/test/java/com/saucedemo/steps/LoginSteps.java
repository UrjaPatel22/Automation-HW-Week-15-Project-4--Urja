package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String userName)  {
        new LoginPage().enterUserName(userName);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
       new LoginPage().enterPassword(password);
    }

    @And("^I click on Login Button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should Navigate to Login Page Successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Products";
        String actualMessage = new LoginPage().getTextFromProductTitle();
        Assert.assertEquals(expectedMessage, actualMessage, "products text should not displayed");
    }

    @Then("^Six Product displayed on a page$")
    public void sixProductDisplayedOnAPage() {
        String expectedNumberOfProducts = "6";
        String actualNumberOfProducts = String.valueOf(new LoginPage().countProductOnList());
        Assert.assertEquals(expectedNumberOfProducts,actualNumberOfProducts,"total number of products are not displayed");

    }
}
