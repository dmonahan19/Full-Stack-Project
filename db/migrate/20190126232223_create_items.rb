class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :website_url

      t.timestamps
    end
  end
end
