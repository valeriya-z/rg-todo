class AddAttachmentDocumentToTasks < ActiveRecord::Migration
  def self.up
    change_table :tasks do |t|
      t.attachment :document
    end
  end

  def self.down
    remove_attachment :tasks, :document
  end
end
