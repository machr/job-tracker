Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :session
  root 'pages#index'
  post '/session', to: 'session#create'
  get '/register', to: 'session#register'
end
