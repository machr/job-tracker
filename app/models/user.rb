class User < ApplicationRecord
  has_secure_password
  has_many :job_listings,dependent: :destroy
  validates_presence_of :status
  validates_confirmation_of :password
  validates_length_of :password, minimum: 3
  validates_format_of :email, with: /regex/i
end
