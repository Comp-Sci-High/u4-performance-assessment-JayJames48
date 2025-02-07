const express = require('express')
const app = express()

const userProfiles = [
    {
      Username: "janeDoe92",
      Description: "A passionate traveler who loves exploring new places and cultures.",
      isSingle: true,
      FavoriteFood: "Sushi",
      Age: 28,
      Birthplace: "Los Angeles, California"
    },
    {
      Username: "markTheExplorer",
      Description: "An adventure enthusiast and aspiring photographer capturing nature's beauty.",
      isSingle: false,
      FavoriteFood: "Pizza",
      Age: 35,
      Birthplace: "Sydney, Australia"
    },
    {
      Username: "emilyWriter",
      Description: "A writer who finds inspiration in books, coffee, and quiet moments.",
      isSingle: true,
      FavoriteFood: "Pasta",
      Age: 24,
      Birthplace: "London, UK"
    },
    {
      Username: "techieSam",
      Description: "Tech lover, gamer, and coding wizard always looking for new challenges.",
      isSingle: false,
      FavoriteFood: "Burgers",
      Age: 30,
      Birthplace: "New York City, New York"
    },
    {
      Username: "creativeLily",
      Description: "A creative soul who enjoys art, photography, and crafting DIY projects.",
      isSingle: true,
      FavoriteFood: "Tacos",
      Age: 26,
      Birthplace: "Paris, France"
    },
    {
      Username: "adventurousNick",
      Description: "A thrill-seeker, always up for skydiving, hiking, and extreme sports.",
      isSingle: false,
      FavoriteFood: "Steak",
      Age: 32,
      Birthplace: "Cape Town, South Africa"
    }
  ];
  
  app.set("view engine", "ejs")

  app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

  app.use(express.static(__dirname + "/public"))

  app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/public/index.html")
  })

  app.get("/",(request,response)=>{

  })









































































app.listen(3000, () => {
    console.log("Server running")
  })