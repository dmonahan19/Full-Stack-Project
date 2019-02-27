@users.each do |user| 
   following_userIds = []
    user.followers.each do |follow| 
       if follow[:following_type] == "User"
            following_userIds << follow.following_id
        end 
    end
    user_follow_ids = {}
    user.follows.each do |follow| 
        if follow[:following_type] == "User"
            user_follow_ids[follow.user_id] = follow.id 
        end 
    end

   board_following_ids = {}
    user.followers.each do |follow| 
        if follow[:following_type] == "Board"
             board_following_ids[follow.following_id] = follow.id 
        end
    end

    following_boardIds = []
    user.followers.each do |follow| 
        if follow[:following_type] == "Board"
            following_boardIds << follow.following_id
        end
    end

    follow_ids_board = []
    user.followers.each do |follow| 
        if follow[:following_type] == "Board"
            follow_ids_board  << follow.id
        end
    end

    follower_userIds = []
    user.follows.each do |follow|
        if follow[:following_type] == "User"
            follower_userIds << follow.user_id
        end
    end

    json.set! user.id do 
        json.extract! user, :id, :email, :first_name, :last_name, :about_you, :location, :board_ids, :follow_ids, :follower_ids
        json.user_follow_ids user_follow_ids
        json.follower_userIds follower_userIds
        json.following_userIds following_userIds
        json.board_following_ids board_following_ids
        json.follow_ids_board  follow_ids_board 
        json.following_boardIds following_boardIds
        if user.photo.attached? 
            json.photo user.photo.service_url
        end
    end
end