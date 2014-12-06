class Project < ActiveRecord::Base
	attr_accessible :name
	has_many :tasks
	validates :name, :presence => true
  belongs_to :user
  validates_presence_of :user
end
