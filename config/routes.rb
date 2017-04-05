Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :job_listings
  get '/api/job_listings', to: 'api/job_listings#index'
  get '/', to: 'pages#index'


  resources :session
  post '/session', to: 'session#create'
  get '/register', to: 'session#register'
end
