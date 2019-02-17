@users.each do |user| 
    following_ids = []
    user.follows.each do |follow| 
        following_ids << follow.user_id 
    end
    user_follow_ids = {}
    user.follows.each do |follow| 
        user_follow_ids[follow.user_id] = follow.id 
    end

    follower_userIds = []
    user.follows.each do |follow| 
        follower_userIds << follow.user_id
    end

    json.set! user.id do 
        json.extract! user, :id, :email, :first_name, :last_name, :about_you, :location, :board_ids, :follow_ids, :follower_ids
        json.user_follow_ids user_follow_ids
        json.follower_userIds follower_userIds
        json.following_ids following_ids
    end
end