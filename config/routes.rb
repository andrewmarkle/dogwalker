Rails.application.routes.draw do
<<<<<<< HEAD
  get 'sessions/new'

  resources :dogs

  resources :users

  resources :daily_schedules

=======
  resources :daily_schedules

>>>>>>> e98cb0e5396f4f60440dc49c8f70fa4ea9756379
  root 'daily_schedules#index'
end
