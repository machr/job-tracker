class AddUrlHostToJobPosting < ActiveRecord::Migration[5.0]
  def change
    add_column :job_postings, :url_host, :string
  end
end
