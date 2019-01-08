@javascript

Feature: User Registration
  Users can to register using their email

  Scenario: Visitor Sign up using email
    Given I visit home page
     When I click on "Register"
     Then I see the registration form
     # When I enter the register information
      # And I click on "Register"
     # Then I see the BMI form
