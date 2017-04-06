Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :job_listings
  get '/api/job_listings', to: 'api/job_listings#index'
  get '/api/job_postings', to: 'api/job_listings#get_jobpostings'

  resources :dashboard
  get '/dashboard', to: 'dashboard#index'
  get '/api/job_listings/:id', to: 'api/job_listings#get_listing_values'


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
