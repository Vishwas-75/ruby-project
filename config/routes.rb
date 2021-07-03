Rails.application.routes.draw do

 
  get 'about/index'
 root 'welcome#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :airlinereviews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'welcome#index', via: :all
  

end

