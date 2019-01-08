Then /(?:|I) see the registration form/ do
  within('.sign-up-form') do
    expect(page).to have_selector '#email'
    expect(page).to have_selector '#password'
    expect(page).to have_selector '#password_confirmation'
  end
end

When /(?:|I) enter the register information/ do
  within('.sign-up-form') do
    # find('#email').set('test@example.com')
    # fill_in '#email', with: 'test@example.com'
    page.find('#email').set('test@example.com')

    # fill_in 'Password (Min is 6 Characters)', with: 'qwerty123'
    # fill_in 'Confirm Password', with: 'qwerty123'
  end
end
