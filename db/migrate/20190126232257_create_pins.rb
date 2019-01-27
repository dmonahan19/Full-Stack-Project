class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title
      t.text :description
      t.integer :item_id, null: false
      t.integer :board_id, null: false

      t.timestamps
    end
    add_index :pins, :item_id 
    add_index :pins, :board_id
  end
end
