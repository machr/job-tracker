class SessionController < ApplicationController
  def new
  end

  def register
    user = User.new
    user.name = params[:name]
    user.email = params[:email]
    user.password = params[:password]
    if user.save
      @message = "Registration Successful"
      render :message
    else
      @failed = true
      @message = "Sorry Please Register Again"
      render :message
    end
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/dashboard'
    else
      #redirect to failed login page?
      redirect_to '/'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

  # def message
  #
  # end
end
