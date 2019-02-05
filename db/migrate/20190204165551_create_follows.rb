class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.string :following_type, null: false
      t.integer :following_id, null: false 
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :follows, :user_id
    add_index :follows, [:following_id, :following_type, :user_id], unique: true
  end
end
