  

   user_follow_ids = []
    user.follows.each do |follow| 
        user_follow_ids << follow.user_id
    end

json.extract! user, :email, :id, :first_name, :last_name, :about_you, :location, :board_ids, :follow_ids, :follower_ids
  json.user_follow_ids user_follow_ids
if user.photo.attached? 
  json.photo user.photo.service_url
end