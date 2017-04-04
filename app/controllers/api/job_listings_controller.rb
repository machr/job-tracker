class Api::JobListingsController < ApplicationController
  def index
    @JobListings = User.all.find(session[:user_id]).job_listings
    render json: @JobListings.to_json
  end

end
