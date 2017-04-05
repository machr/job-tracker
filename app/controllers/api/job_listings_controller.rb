class Api::JobListingsController < ApplicationController
  def index
    #Retrieve every job listing posted by user
    job_listings = User.find_by(id: session[:user_id]).job_listings
    job_listings.map do |element|
      element["created_at"]= element["created_at"].strftime("%d/%m/%Y")
    end
    render json: job_listings
  end

  def show
    #Retrieving every activity relating to a single job listing
    job_activities = JobListing.find_by(id: params[:job_id]).activities
    #Check if there are any activities found relating to this job listing
    if job_activities
      render json: job_activities
    else
      render json: {message: 'No Job Activity found !'}
    end
  end

  def create_joblisting
    joblisting = JobListing.new
    joblisting.user_id = session[:user_id]
    joblisting.position = params[:position]
    joblisting.company = params[:company]
    joblisting.contact = params[:contact]
    joblisting.notes = params[:notes]
    joblisting.status = params[:status]
    joblisting.url = params[:url]
    if joblisting.save
      render json: joblisting
    else
      render json: {message: 'Failed to Save Job Listing!'}
    end
  end

  def update_joblisting
    joblisting = JobListing.find_by(id: params[:job_id])
    joblisting.position = params[:position]
    joblisting.company = params[:company]
    joblisting.contact = params[:contact]
    joblisting.notes = params[:notes]
    joblisting.status = params[:status]
    joblisting.url = params[:url]
    if joblisting.save
      #after saving, return a list of all job listings incld updated one
      render json: User.all.find_by(id: session[:user_id]).job_listings
    else
      render json: {message: 'Failed to Update Job Listing!'}
    end
  end

  def delete_joblisting
    joblisting = JobListing.find_by(id: params[:job_id])
    if joblisting.destroy
      render json: {message: 'Successfully Deleted'}
    else
      render json: {message: 'Failed to Delete Job Listing'}
    end
  end

  def create_activity
    activity = Activity.new
    activity.job_listing_id = params[:job_id]
    activity.notes = params[:notes]
    activity.date = Date.today
    if activity.save
      render json: activity.to_json
    else
      render json: {message: 'Failed to add Activity to job Listing!'}
    end
  end

  def update_activity
    activity = Activity.find_by(id: params[:activity_id])
    activity.notes = params[:notes]
    if activity.save
      #after saving, return a list of all job activities relating
      render json: JobListing.find_by(id: params[:job_id]).activities
    else
      render json: {message: 'Failed to Update Activity Listing!'}
    end
  end

  def delete_activity
    activity = Activity.find_by(id: params[:activity_id])
    if activity.destroy
      render json: JobListing.find_by(id: params[:job_id]).activities
    else
      render json: {message: 'Failed to Delete Activity'}
    end
  end
end
