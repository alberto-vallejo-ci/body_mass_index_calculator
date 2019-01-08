When /(?:|I) click on "([^"]*)"/ do |button|
  click_on button
end

Then(/(?:|I) wait (\d+) seconds$/) do |secs|
  sleep secs.to_i
end

Given(/^There is a user with email "(.*?)"$/) do |email|
  FactoryBot.create(:user, email: email)
end

When(/^(?:|I) fill the field "(.*?)" with "(.*?)"$/) do |field, value|
  fill_in field, with: value
end

Then(/(?:|I) see the message "(.*?)"$/) do |message|
  expect(page).to have_content message
end
