JobListing.destroy_all
user = User.new
user.name = "test user"
user.email = "test@mail.com"
user.password = "123"
user.save

u = User.first

pos = ['Web Developer','FrontEnd Developer', 'BackEnd Developer','Web Designer']
company = ['General Assembly','Web Power Works','Internet Warriors']


7. times do | num |

  JobListing.create({position: "#{pos.sample}",
  company: "#{company.sample}",
  contact: "1234567",
  notes: "Lorem Ipsum ",
  status: "Submitted Application",
  url: "www.google.com",
  user_id:u.id})

end
