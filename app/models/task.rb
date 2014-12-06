class Task < ActiveRecord::Base
   attr_accessible :name, :completed, :document, :document_file_name
   belongs_to :project
   validates :name, presence: true
   has_attached_file :document, :default_url => "/files/:style/missing.doc", :styles => { :thumb => ["32x32#", :png] }
   validates_attachment_content_type :document, :content_type => /\Aapplication/
   validates_attachment_file_name :document, :matches => [/pdf\Z/, /doc\Z/]
end
