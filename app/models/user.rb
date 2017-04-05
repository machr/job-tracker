class User < ApplicationRecord
  has_secure_password
  has_many :job_listings,dependent: :destroy
end
