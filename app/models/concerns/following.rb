module Following 
        extend ActiveSupport::Concern

        included do 
            has_many :follows, as: :following
            has_many :followers, through: :follows
        end 
end