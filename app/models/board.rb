# == Schema Information
#
# Table name: boards
#
#  id          :bigint(8)        not null, primary key
#  title       :string
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class Board < ApplicationRecord
    validates :title, :user_id, presence: true;

    has_many :pins,
        foreign_key: :board_id,
        primary_key: :id,
        class_name: :Pin

    belongs_to :user,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :User
end
