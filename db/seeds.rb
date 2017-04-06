
JobListing.destroy_all
JobPosting.destroy_all
User.destroy_all
user = User.new
user.name = "test user"
user.email = "test@mail.com"
user.password = "123"
user.save

user2 = User.new
user2.name = "test user 2"
user2.email = "test@mail.com"
user2.password = "123"
user2.save

u = User.first
u2 = User.last
user_array = [u.id,u2.id]

pos = ['Web Developer','Front End Developer', 'Back End Developer','Web Designer', '.Net Developer', 'DevOps Engineer']
company = ['General Assembly','Web Power Works','Internet Warriors','Keyboard Gladiators', 'The General Store']


11. times do | num |

  JobListing.create({position: "#{pos.sample}",
  company: "#{company.sample}",
  contact: "1234567",
  notes: "Lorem Ipsum ",
  status: "Submitted Application",
  url: "www.google.com",
  user_id:user_array.sample})

end


job_posting = JobPosting.new
job_posting.user_id = u.id
job_posting.position = "Web Developer"
job_posting.url = "https://www.seek.com.au/job/33181217?type=standard&tier=no_tier&pos=1&whereid=3000&userqueryid=c9af8bea4cb08cacf1663ca9af23fd20-9590490&ref=beta"
job_posting.url_host = "seek"
job_posting.save

job_posting = JobPosting.new
job_posting.user_id = u2.id
job_posting.position = ".NET Web Developer"
job_posting.url = "http://www.jobg8.com/Application.aspx?zVGuCV2i1IogSO%2bJPenWBgc&Language=3081"
job_posting.url_host = "jobg8"
job_posting.save

job_posting = JobPosting.new
job_posting.user_id = u2.id
job_posting.position = "Full Stack Web Developer PHP"
job_posting.url = "http://www.jobg8.com/Application.aspx?zVGuCV2i1IogSO%2bJPenWBgc&Language=3081"
job_posting.url_host = "seek"
job_posting.save
