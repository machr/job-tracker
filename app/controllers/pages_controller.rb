class PagesController < ApplicationController
  def index
    user = session[:user_id]
  end

  def register
  end
end
