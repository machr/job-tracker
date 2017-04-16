module ApplicationHelper
  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def current_user_daily_job_listings
    current_user.job_listings.where('created_at >= ?',Time.zone.now.beginning_of_day)
  end

  def current_user_job_applications
    User.find_by(id: session[:user_id]).job_listings
  end

  def current_user_weekly_job_applications(week_num)
    current_user_job_applications.where('created_at >= ?',(week_num.to_i).week.ago)
  end

  def current_user_monthly_job_applications(month_num)
    current_user_job_applications.where('created_at >= ?',(month_num.to_i).month.ago)
  end

  def current_user_daily_job_listing_num
    current_user_daily_job_listings.count
  end

  def current_user_daily_job_listing_applied_num
    current_user_daily_job_listings.where(['status != ? AND status != ?', "Just Added","Writing Application"]).count
  end

  def remain_daily_goals
    5 - current_user_daily_job_listing_applied_num
  end

  def current_user_weekly_job_listings
    current_user.job_listings.where('created_at >= ?',1.week.ago)
  end

  def current_user_weekly_job_listing_num
    current_user_weekly_job_listings.count
  end

  def current_user_weekly_job_listing_applied_num
    current_user_weekly_job_listings.where(['status != ? AND status != ?', "Just Added","Writing Application"]).count
  end

  def remain_weekly_goals
   35 - current_user_weekly_job_listing_applied_num
  end

  def current_user_pending_applications_num
   current_user.job_listings.where(['status = ? OR status = ?', "Just Added","Writing Application"]).count
  end

end
