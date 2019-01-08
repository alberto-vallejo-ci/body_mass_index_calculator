require 'cucumber/rails'
require 'capybara-screenshot/cucumber'

if ENV['CC_BUILD_ARTIFACTS']
  # save Capybara screenshot inside Artifacts directory
  Capybara.save_and_open_page_path = ENV['CC_BUILD_ARTIFACTS']
end

Capybara::Screenshot.register_driver(:chrome) do |driver, path|
  driver.save_screenshot(path)
end
