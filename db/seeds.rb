# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
userNew = User.create(name: "Marcus")

rooms = Room.create([
  {
    title: "Sala 1",
    user: userNew
  },
  {
    title: "Sala 2",
    user: userNew
  },
  {
    title: "Sala 3",
    user: userNew
  },
  {
    title: "Sala 4",
    user: userNew
  },
])

reviews = Review.create([
  {
    title: "Nice room",
    description: "I lovely the videos",
    score: 5,
    room: rooms.first
  },
  {
    title: "is good",
    description: "I hope is better",
    score: 3,
    room: rooms.first
  }
])
