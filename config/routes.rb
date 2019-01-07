Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'registrations'}

  resource :home, only: [:show, :update], controller: :home

  root 'home#show'
end
