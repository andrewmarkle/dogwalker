class Dog < ActiveRecord::Base
  belongs_to :user

  validates :name, :age
end
