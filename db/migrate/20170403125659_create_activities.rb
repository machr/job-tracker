class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.references :job_listing, foreign_key: true
      t.date :date
      t.text :notes

      t.timestamps
    end
  end
end
