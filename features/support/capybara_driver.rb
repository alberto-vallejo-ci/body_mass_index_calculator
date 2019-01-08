# Use Chrome as the driver: http://bit.ly/1QFAMDK
Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

driver = :rack_test
js_driver = :chrome

if ENV['DRIVER']
  driver = ENV['DRIVER'].to_sym
  js_driver = ENV['DRIVER'].to_sym
end

Capybara.default_driver = driver
Capybara.javascript_driver = js_driver

Capybara.configure do |config|
  config.default_max_wait_time = 20 # seconds
  config.default_driver = :selenium
end
