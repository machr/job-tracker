class JobListing < ApplicationRecord
  belongs_to :user
  has_many :activities,dependent: :destroy
  validates_presence_of :status
end
