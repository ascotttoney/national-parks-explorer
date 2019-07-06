# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
limit = 100
URL_BASE = "https://developer.nps.gov/api/v1/parks?fields=images&limit=#{limit}&start="
start = 1
API_KEY = '&api_key=Hbwwee9IX6XMWbZrmgd6XgAoM8WsOzXcGqbR3WoK'

while start < 500
  parks = JSON.parse(open(URL_BASE + start.to_s + API_KEY).read)['data']
  parks.each do |p|
    new_park = {}
    new_park[:latLong] = p['latLong']
    new_park[:name] = p['name']
    new_park[:fullname] = p['fullname']
    new_park[:parkCode] = p['parkCode']
    new_park[:states] = p['states']
    new_park[:designation] = p['designation']
    new_park[:url] = p['url']
    new_park[:description] = p['description']
    new_park[:weatherInfo] = p['weatherInfo']
    park = Park.create(new_park)
    p['images'].each do |i|
      new_image = { park_id: park.id, title: i['title'], altText: i['altText'], url: i['url'], caption: i['caption'], credit: i['credit'] }
      ParkImage.create(new_image)
    end
  end
  start += 100
end
