class CreateJobListings < ActiveRecord::Migration[5.0]
  def change
    create_table :job_listings do |t|
      t.references :user, foreign_key: true
      t.string :position
      t.string :company
      t.string :contact
      t.string :notes
      t.string :status
      t.string :url

      t.timestamps
    end
  end
end
