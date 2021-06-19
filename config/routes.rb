Rails.application.routes.draw do

 root 'welcome#index'

  namespace :api do
    namespace :v1 do
      resource :airlines, param: :slug
      resource :airlinereviews, olnly: [:create, :destroy]
    end
  end

  get '*path', to: 'welecome#index', via: :all
  

end

