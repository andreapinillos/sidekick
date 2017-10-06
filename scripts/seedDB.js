const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the sidekick collection and inserts the entries below

console.log("you're in seeds")

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sidekickDB",
  {
    useMongoClient: true
  }
);

console.log("you are in the seeds file");

const sidekickseed = [
  {
    "name": "SpongeBob",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "bio": "Fry Cook in A Pineapple Under the Sea",
    "email" : "spongebob@gmail.com",
    "activity": "hiking",
    "zipcode": "20008",
    "fbid": "9999"

  },
  {
    "name": "Mr. Krabs",
    "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
    "bio": "Restaurant Owner in a Giant Anchor",
    "email" : "krabs@gmail.com",
    "activity": "dancing",
    "zipcode": "20008",
    "fbid": "8888",
    "email" : "krabs@gmail.com"    
  },
  {
    "name": "Squidward",
    "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
    "bio": "Cashier in An Easter Island Head",
    "activity": "hiking",
    "zipcode": "20008",
    "fbid": "7777",
    "email" : "squid@gmail.com"    
  },
  {
    "name": "Dexter",
    "image": "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",
    "bio": "Boy Genius in A Secret Laboratory",
    "activity": "hiking",
    "zipcode": "20008",
    "fbid": "6666",
    "email" : "dex@gmail.com"    
  },
  {
    "name": "Courage",
    "image": "https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",
    "bio": "A Cowardly Dog in Nowhere, Kansas",
    "activity": "running",
    "zipcode": "20008",
    "fbid": "5555",
    "email" : "courage@gmail.com"    
  },
  {
    "name": "Doug Funnie",
    "image": "https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",
    "bio": "Student in Bluffington",
    "activity": "dancing",
    "zipcode": "20008",
    "fbid": "4444",
    "email" : "doug@gmail.com"    
  },
  {
    "name": "Bugs Bunny",
    "image": "https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",
    "bio": "Looney Toon in a rabbit burrow",
    "activity": "rock climbing",
    "zipcode": "20008",
    "fbid": "3333",
    "email" : "bugs@gmail.com"    
  },
  {
    "name": "Johnny Bravo",
    "image": "http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",
    "bio": "Ladies Man in Aron City",
    "activity": "hiking",
    "zipcode": "20008",
    "fbid": "2222",
    "email" : "johnny@gmail.com"    
  },
  {
    "name": "Tommy Pickles",
    "image": "https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",
    "bio": "Adventurer in California",
    "activity": "running",
    "zipcode": "20009",
    "fbid": "1111",
    "email" : "tommy@gmail.com"    
  },
  {
    "name": "Rocko",
    "image": "http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",
    "bio": "Cashier in o-town California",
    "activity": "dancing",
    "zipcode": "20009",
    "fbid": "1100",
    "email" : "rocko@gmail.com"    
  },
  {
    "name": "Captain Planet",
    "image": "http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",
    "bio": "Superhero on Earth",
    "activity": "running",
    "zipcode": "20009",
    "fbid": "1222",
    "email" : "cplanet@gmail.com"    
  },
  // {
  //   "name": "Ickis",
  //   "image": "http://static.tvtropes.org/pmwiki/pub/images/ickis.png",
  //   "bio": "Ahhhh! A Real Monster! Under a city dump",
  //   "activity": "rock climbing",
  //   "zipcode": "20009",
  //   "fbid": "3211",
  //   "email" : "ickis@gmail.com"    
  // }
  // {
  //   "name": "Anastasia Mark",
  //   "image": "https://i.pinimg.com/736x/df/d4/48/dfd448eb0535129bd7689343810f6551--chow-chow-puppies-chihuahua-puppies.jpg",
  //   "bio": "Coderrrrr",
  //   "email" : "omishark@gmail.com",
  //   "activity": "hiking",
  //   "zipcode": "20008",
  //   "fbid": "10159562313540601"
  // },  
]


db.Sidekick_model
  .remove({})
  .then(() => db.Sidekick_model.collection.insertMany(sidekickseed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
