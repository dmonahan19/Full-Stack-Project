
json.follows do
  @follows.each do |follow|
    json.set! follow.following_id do
      json.extract! follows, :id, :following_id, :user_id
    end
  end
end