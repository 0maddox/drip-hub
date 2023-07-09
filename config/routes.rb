
Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :favourites, only: %i[index create destroy]
      resources :clothes, only: %i[index create show destroy]

      post 'login', to: 'authentication#create'
      post 'register', to: 'users#create'
    end
  end
end
