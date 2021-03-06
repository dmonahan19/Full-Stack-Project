# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  about_you       :text
#  location        :string
#

class User < ApplicationRecord

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token


    # include Following

    has_one_attached :photo

    has_many :boards,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :Board

    has_many :pins,
        through: :boards,
        source: :pins
    
  has_many  :follows,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :User
        
        
  has_many  :followers,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :Follow

    has_many :follows, as: :following
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.valid_password?(password)
        user 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end

