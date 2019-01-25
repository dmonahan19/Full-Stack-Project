json.extract! user, :email, :id, :first_name, :last_name, :about_you, :location
if user.photo.attached? 
  json.photo user.photo.service_url
end