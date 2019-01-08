@javascript

Feature: Users Calculate their BMI
  Users can log in and Calculate their BMI

  Background:
    Given There is a user with email "test@user.com"
      And User login using email "test@user.com"

  Scenario: User get him/her BMI
     Given I see the BMI form
      When I fill the field "Weight" with "85"
       And I fill the field "Height" with "186"
       And I click on "Calculate BMI"
      Then I see the message "Normal (healthy weight) (MBI: 24.6)"

  Scenario: User submit blank form
     Given I see the BMI form
      When I click on "Calculate BMI"
      Then I see the message "Weight is required."
      Then I see the message "Height is required."

  Scenario: User provide wrong Height
     Given I see the BMI form
      When I fill the field "Weight" with "85"
       And I fill the field "Height" with "18"
       And I click on "Calculate BMI"
      Then I see the message "Height should be given in centimeters."

  Scenario: User provide wrong Weight
     Given I see the BMI form
      When I fill the field "Weight" with "8"
       And I fill the field "Height" with "186"
       And I click on "Calculate BMI"
      Then I see the message "Weight it's too low for an adult."
