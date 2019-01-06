Rails.application.routes.draw do
  resource :home, only: :show, controller: :home

  root 'home#show'
end
