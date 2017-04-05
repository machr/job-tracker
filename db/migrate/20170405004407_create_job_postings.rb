class CreateJobPostings < ActiveRecord::Migration[5.0]
  def change
    create_table :job_postings do |t|
      t.references :user, foreign_key: true
      t.string :position
      t.string :url

      t.timestamps
    end
  end
end
