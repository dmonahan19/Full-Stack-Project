# == Schema Information
#
# Table name: follows
#
#  id             :bigint(8)        not null, primary key
#  following_type :string           not null
#  following_id   :integer          not null
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Follow < ApplicationRecord

    belongs_to :following, polymorphic: true

    
end