Then /(?:|I) see the BMI form/ do
  expect(page).to have_selector '#weight'
  expect(page).to have_selector '#height'
end
