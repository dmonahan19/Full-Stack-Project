# == Schema Information
#
# Table name: pins
#
#  id          :bigint(8)        not null, primary key
#  title       :string
#  description :text
#  item_id     :integer          not null
#  board_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pin < ApplicationRecord
    validates :item_id, :board_id, presence: true;

    belongs_to :board,
        foreign_key: :board_id,
        primary_key: :id,
        class_name: :Board

    belongs_to :item,
        foreign_key: :item_id,
        primary_key: :id,
        class_name: :Item

    has_many :users,
        through: :boards,
        source: :user 

end
