  
   follower_userIds = []
    user.follows.each do |follow| 
        follower_userIds << follow.user_id
    end

json.extract! user, :email, :id, :first_name, :last_name, :about_you, :location, :board_ids, :follow_ids, :follower_ids
  json.follower_userIds follower_userIds
if user.photo.attached? 
  json.photo user.photo.service_url
end