class JobListing < ApplicationRecord
  belongs_to :user
  has_many :activities,dependent: :destroy
end
