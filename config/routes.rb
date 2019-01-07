Rails.application.routes.draw do
  resource :home, only: [:show, :update], controller: :home

  root 'home#show'
end
