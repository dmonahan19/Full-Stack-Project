json.extract! user, :email, :id, :first_name, :last_name, :about_you, :location, :board_ids
if user.photo.attached? 
  json.photo user.photo.service_url
end