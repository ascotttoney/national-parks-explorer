Rails.application.routes.draw do
  resources :future_visits
  resources :past_visits
  resources :users
  resources :park_images
  resources :parks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
