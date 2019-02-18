@users.each do |user| 
   following_userIds = []
    user.followers.each do |follow| 
        following_userIds << follow.following_id
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
        json.following_userIds following_userIds
    end
end