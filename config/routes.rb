Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :rooms, except: [:new, :edit]
      resources :users, except: [:new, :edit]
      resources :reviews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
