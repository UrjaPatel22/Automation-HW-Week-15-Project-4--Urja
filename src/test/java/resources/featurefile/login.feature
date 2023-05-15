Feature: Login Test
  As user I want to login into Sauce Demo Website
@sanity @regression
  Scenario: User Should Login Successfully With Valid Credentials
  Given I am on Homepage
    When I enter email "standard_user"
    And I enter password "secret_sauce"
    And I click on Login Button
    Then I should Navigate to Login Page Successfully

  @smoke @regression
Scenario: Verify Six Product Should be displayed on a page
    Given I am on Homepage
    When I enter email "standard_user"
    And I enter password "secret_sauce"
    And I click on Login Button
    Then Six Product displayed on a page

