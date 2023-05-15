$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into Sauce Demo Website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3729721400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Login Successfully With Valid Credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should Navigate to Login Page Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 64272000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 88439400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 48154600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 80970600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 28921500,
  "status": "passed"
});
formatter.after({
  "duration": 657363500,
  "status": "passed"
});
formatter.before({
  "duration": 1421009400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Six Product Should be displayed on a page",
  "description": "",
  "id": "login-test;verify-six-product-should-be-displayed-on-a-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Six Product displayed on a page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 60628800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 52441700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 75368800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.sixProductDisplayedOnAPage()"
});
formatter.result({
  "duration": 30697000,
  "status": "passed"
});
formatter.after({
  "duration": 656210000,
  "status": "passed"
});
});