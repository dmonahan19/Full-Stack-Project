@users.each do |user| 
    following_ids = []
    user.follows.each do |follow| 
        following_ids << follow.user_id 
    end
    follower_ids = {}
    user.follows.each do |follow| 
        follower_ids[follow.user_id] = follow.id 
    end
    json.set! user.id do 
        json.extract! user, :id, :email, :first_name, :last_name, :about_you, :location, :board_ids, :follow_ids
        json.follower_ids follower_ids
        json.following_ids following_ids
    end
end