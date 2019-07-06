# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

https://developer.nps.gov/api/v1/parks?fields=images,entranceFees&limit=50&sort=designation&start=1

URL_BASE = "https://developer.nps.gov/api/v1/parks?fields=images&limit=100&start="
start = 1
API_KEY = "&api_key=Hbwwee9IX6XMWbZrmgd6XgAoM8WsOzXcGqbR3WoK"

parks = JSON.parse(open(URL_BASE+ start + API_KEY).read)["data"]
parks.each { |p|
  
}