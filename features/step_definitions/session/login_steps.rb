Then /^(?:|I) see the login form$/ do
  within('.log-in-form') do
    expect(page).to have_selector '#email'
    expect(page).to have_selector '#password'
  end
end

Given /^User login using email "([^"]*)"$/ do |email|
  step 'I visit home page'
  step 'I click on "Log In"'
  step 'I see the login form'
  step 'I fill the field "Email" with "test@user.com"'
  step 'I fill the field "Password" with "password"'
  step 'I click on "Log In"'
  step 'I wait 1 seconds'
end
