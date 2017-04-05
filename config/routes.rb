Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :job_listings
  get '/api/job_listings', to: 'api/job_listings#index'

  resources :dashboard
  get '/dashboard', to: 'dashboard#index'

  resources :sessions
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

  root 'pages#index'
end
