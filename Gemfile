source 'https://rubygems.org'

gem 'sendgrid-ruby'

gem 'rubystats'
# help
gem 'spring-commands-rspec', group: :development
# Add Angular to Rails Asset Pipeline
gem 'angularjs-rails'
# Deal with CORS issues
gem 'angular_rails_csrf'
# Devise for authentication
gem 'devise'
# Omniauth gems
gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-github'
# Adding to devise module for angular
source "https://rails-assets.org" do
  gem "rails-assets-angular-devise"
end
# Paperclip for handeling file upload
gem "paperclip", "~> 5.0.0"
# AWS for hosting files
gem 'aws-sdk', '~> 2'
# Convinent handeling of secret keys
gem "figaro"
# Styling and grid system
gem 'bootstrap', '~> 4.0.0.alpha4'
# Bootstrap dependency

gem 'textacular', require: 'textacular/rails'

gem 'ransack', github: 'activerecord-hackery/ransack'
source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.1.0'
end
# testing to resolve an issue with font-awesome-sass files unfound or unreadable
gem 'font-awesome-rails'
# icons, since Bootstrap 4 doesn't have any
# gem 'font-awesome-sass', '~> 4.6.2'
# JQuery UI for angular-modal
gem 'jquery-ui-rails'
# to be able to user assert_template in controller testing
gem 'rails-controller-testing'
# pan-doc is for document conversion
gem 'pandoc-ruby'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
gem 'faker'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do



  # Testing framework
  gem 'rspec-rails'
  # Replacement for fixtures
  gem 'factory_girl_rails'
  # Collection of testing matchers
  gem 'shoulda-matchers'
  gem 'pry'


  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
end

group :development do



  # Nice display for SQL responses
  gem 'hirb'
  # Debugging in browser
  gem 'better_errors'
  gem 'binding_of_caller'

  # Allow creation fo fake data
  # Fake email sending
  gem "letter_opener"
  gem "bullet"



  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# Ruby version for deployment
ruby "2.2.4"
