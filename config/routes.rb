Rails.application.routes.draw do
  resources :daily_schedules

  root 'daily_schedules#index'
end
