Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :pins, except: [:index, :create]
    resources :boards do 
      resources :pins, only: [:index]
    end 
    resources :items do 
      resources :pins, only: [:create]
    end 
  end 
end
