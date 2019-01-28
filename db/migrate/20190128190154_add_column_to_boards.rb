class AddColumnToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :description, :text
  end
end
