# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Apartments have:
# User: id
# a street designation : string
# Apt_num: integer
# a city:  string
# postal code: string
# State: string
# country: string
#
# Managers:
# Apartment id:
# Name: string
# phone number:
# hours to contact:

apartments = [
{
  user_id: 1,
  street: '1601 blackthorne ave',
  apt_num: 52,
  city: 'San Diego',
  postal_code: '92101',
  state: 'California',
  country: 'United States'
},
{
  user_id: 2,
  street: '5555 Maplewood ave',
  apt_num: 121,
  city: 'Escodido',
  postal_code: '92026',
  state: 'California',
  country: 'United States'
},
{
  user_id: 3,
  street: '45 Cherry St',
  apt_num: 3,
  city: 'Chico',
  postal_code: '95926',
  state: 'California',
  country: 'United States'
},
]
apartments.each do |attributes|
  Apartment.create attributes
end
