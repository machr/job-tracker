class Api::JobListingsController < ApplicationController
  def index
    @JobListings = User.all.find(session[:user_id]).job_listings
    # This should be on the Dashboard page. INdes should display all listings
    render json: @JobListings.to_json
  end

end
