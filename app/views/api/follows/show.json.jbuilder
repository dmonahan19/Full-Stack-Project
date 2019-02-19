json.extract! @follow, :id, :following_id, :user_id, :following_type

if @follow[:following_type] == "User"
 json.extract! @follow.following, :email, :first_name, :last_name, :follow_ids
      if @follow.following.photo.attached? 
        json.photo @follow.following.photo.service_url
      end
end




