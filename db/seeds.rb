# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Board.delete_all
Pin.delete_all
Item.delete_all

sarah = User.create!(email: 'sarah23@gmail.com',  password:'password', first_name: "Sarah",last_name: 'Brown', about_you: "", location: "New York")
jess = User.create!(email: 'Jess54@gmail.com',  password:'password', first_name: "Jess", last_name: 'Smith', about_you: "I love movies", location: "Delaware")
fashion = User.create!(email: 'fashionlover@gmail.com',  password:'password', first_name: "", last_name: '', about_you: "I work in fashion", location: "California")
sam = User.create!(email: 'foodcritic@gmail.com', password:'password', first_name: "Sam", last_name: 'Pitt', about_you: "I consider food to be art", location: "California")
casey = User.create!(email: 'chicfashion@gmail.com', password:'password', first_name: "Casey", last_name: 'Murry', about_you: "", location: "")
demouser = User.create!(email:'demouser', password:'password', first_name: "Casey", last_name: 'Murry', about_you: "", location: "")

style = Board.create!(
  title: 'My Style',
  user_id: demouser.id,
  )

fashion = Board.create!(
  title: 'Fashion',
  user_id: demouser.id,
  )

food = Board.create!(
  title: 'Food',
  user_id: sam.id,
)

decor = Board.create!(
  title: 'Decor',
  user_id: demouser.id
)

recipies = Board.create!(
  title:'Recipies',
  user_id: sam.id,
)

adventure = Board.create!(
  title:'Favorite Places',
  user_id: demouser.id
)

home = Board.create!(
  title: "Home",
  user_id: demouser.id,

)

item1 = Item.create!(
    website_url: "www.fashion.com"
)

item2 = Item.create!(
    website_url: ""
)

# pic_1 = File.open("/Users/daniellemonahan/Desktop/pixtrest/pic1.jpg")
# item1.photo.attach(io: pic_1, filename: 'pic1.jpg')


pin1 = Pin.create!(
  title: "Cute Outfit",
  board_id: fashion.id,
  item_id: item1.id,
  description: ""
)

pin2 = Pin.create!(
  title: "",
  board_id: fashion.id,
  item_id: item2.id,
  description: "love this bag"
)
