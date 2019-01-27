class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title
      t.integer :user_id

      t.timestamps
    end
    add_index :boards, :user_id
  end
end
