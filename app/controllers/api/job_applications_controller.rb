class Api::JobApplicationsController < ApplicationController
  include ApplicationHelper
  def get_jobs
    #get job applications by x num of weeks ago
    if params.include?(:w)
      if params.include?(:offset)
        num = params[:offset].to_i
        render json: current_user_weekly_job_applications(params[:w]).limit(10).offset(num)
      else
        render json: current_user_weekly_job_applications(params[:w]).limit(10)
      end

    #get job applications by x num of months ago
    elsif params.include?(:m)
      if params.include?(:offset)
        num = params[:offset].to_i
        render json: current_user_monthly_job_applications(params[:w]).limit(10).offset(num)
      else
        render json: current_user_monthly_job_applications(params[:w]).limit(10)
      end

    #default gets all job applications if no weeks or month is specified in params
    else
      render json: current_user_job_applications
    end
  end
end
