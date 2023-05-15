package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath="//input[@id='user-name']")
    WebElement usernameField;

    @CacheLookup
    @FindBy(xpath="//input[@id='password']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath="//input[@id='login-button']")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath="//span[contains(text(),'Products')]")
    WebElement productTitleText;

    @CacheLookup
    @FindBy(className = "inventory_item_label")
    List<WebElement> sixProducts;



    public void enterUserName(String userName) {
        log.info("Enter username " + userName + " to User Name field " + userName.toString());
        sendTextToElement(usernameField, userName); }

    public void enterPassword(String password) {
        log.info("Enter username " + password + " to Password field " + password.toString());
        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton() {
        log.info("Clicking on Login Button ");
        clickOnElement(loginButton);
    }


    public String getTextFromProductTitle() {
        log.info("Get Text From Product Title" );
        return getTextFromElement(productTitleText);
    }



    public int countProductOnList() {
        log.info("Count Total no of products");
        for (WebElement size : sixProducts) {
            size.getSize();
            break;
        }
        return sixProducts.size();
    }



}
