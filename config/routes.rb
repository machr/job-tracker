Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :job_listings
  get '/api/job_listings', to: 'api/job_listings#index'

  resources :dashboard
  get '/dashboard', to: 'dashboard#index'


  resources :sessions
  post '/session/register', to: 'session#register'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'
  get '/session/register', to: 'session#register'


  get '/register', to: 'pages#register'
  get '/message', to: 'session#register'
  post '/register', to: 'session#register'

  root 'pages#index'
end
