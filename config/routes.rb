Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get '/api/job_listings', to: 'api/job_listings#index'
  get '/', to: 'pages#index'
  post '/session', to: 'session#create'

end
