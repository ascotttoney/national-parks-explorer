# frozen_string_literal: true

Rails.application.routes.draw do
  resources :future_visits
  resources :past_visits
  resources :users
  resources :park_images, only: %i[index show]

  resources :parks, only: %i[index show]
  get '/parks/:id/images', to: 'parks#images'
  get '/parks/:id/past_visits', to: 'parks#past_visits'
  get '/parks/:id/past_visitors', to: 'parks#past_visitors'
  get '/parks/:id/future_visits', to: 'parks#future_visits'
  get '/parks/:id/future_visitors', to: 'parks#future_visitors'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
