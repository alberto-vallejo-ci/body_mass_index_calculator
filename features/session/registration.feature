@javascript

Feature: User Registration
  Users can to register using their email

  Scenario: Visitor Sign up using a new email
    Given I visit home page
     When I click on "Register"
     Then I see the registration form
     When I enter the register information
     Then I click on "Register"
      And I wait 1 seconds
     Then I see the BMI form

  Scenario: Visitor Sign up using an existing email
    Given There is a user with email "test@user.com"
     When I visit home page
      And I click on "Register"
     Then I see the registration form
     When I fill the field "Email" with "test@user.com"
      And I fill the field "Password (Min is 6 Characters)" with "qwerty123"
      And I fill the field "Confirm Password" with "qwerty123"
      And I click on "Register"
      And I wait 1 seconds
     Then I see the message "Email has already been taken"
