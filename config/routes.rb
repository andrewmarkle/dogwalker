Rails.application.routes.draw do
  get 'sessions/new'

  resources :dogs

  resources :users

  resources :daily_schedules

  root 'daily_schedules#index'
end
