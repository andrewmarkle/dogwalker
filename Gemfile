source 'https://rubygems.org'
gem 'rails', '4.2.0'
gem 'pg'

# css
gem 'bootstrap-sass', '~> 3.3.5'
gem 'font-awesome-sass', '~> 4.3.0'
gem 'sass-rails', '~> 5.0'

# js
gem 'browserify-rails', '~> 2.1.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'uglifier'

# Use Rails Html Sanitizer for HTML sanitization
gem "rails-html-sanitizer"

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem "therubyracer"
gem "autoprefixer-rails"
gem "awesome_print"

group :development, :test do
  gem 'pry'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'spring'
  gem 'spring-commands-rspec'

  # Linters
  gem "rubocop", require: false
  gem "scss_lint", require: false
end

group :test do
  gem 'capybara-webkit'
  gem "chromedriver-helper"
  gem 'cucumber-rails', require: false
  gem 'capybara-screenshot'
  gem 'database_cleaner'
  gem 'capybara-ui', '~> 1.0.1'
  gem 'factory_girl_rails'
  gem 'rspec-rails'
  gem 'rspec-retry'
  gem 'selenium-webdriver'
end

group :production do
  gem "rails_12factor"
  gem "puma"
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
