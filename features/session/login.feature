@javascript

Feature: User Log In
  Users can log in usign their email

  Scenario: User logs in using register email
    Given There is a user with email "test@user.com"
     When I visit home page
      And I click on "Log In"
     Then I see the login form
     When I fill the field "Email" with "test@user.com"
      And I fill the field "Password" with "password"
     Then I click on "Log In"
      And I wait 1 seconds
     Then I see the BMI form

  Scenario: User logs in using no register email
    Given There is a user with email "test@user.com"
     When I visit home page
      And I click on "Log In"
     Then I see the login form
     When I fill the field "Email" with "noemail@user.com"
      And I fill the field "Password" with "password"
     Then I click on "Log In"
      And I wait 1 seconds
     Then I see the message "Invalid Email or password."
