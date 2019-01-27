# == Schema Information
#
# Table name: items
#
#  id          :bigint(8)        not null, primary key
#  website_url :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Item < ApplicationRecord
    
    has_one_attached :photo
    
    has_many :pins,
        foreign_key: :item_id,
        primary_key: :id,
        class_name: :Pin


end
