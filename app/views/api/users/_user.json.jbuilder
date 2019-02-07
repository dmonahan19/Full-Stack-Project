   follower_ids = []
    user.follows.each do |follow| 
        follower_ids << follow.user_id 
    end

json.extract! user, :email, :id, :first_name, :last_name, :about_you, :location, :board_ids, :follow_ids
  json.follower_ids follower_ids
if user.photo.attached? 
  json.photo user.photo.service_url
end