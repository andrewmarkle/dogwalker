class User < ActiveRecord::Base
  has_many :dogs, dependent: :destroy
  has_one :daily_schedule, dependent: :destroy

  has_secure_password

  validates :name, presence: true
  validates :email, uniqueness: true, case_sensitive: false 
  validates :password, confirmation: true
end
