class Task < ActiveRecord::Base
 attr_accessible :name, :completed
 belongs_to :project
  validates :name, presence: true
end
