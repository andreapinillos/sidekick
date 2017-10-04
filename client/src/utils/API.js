import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  // Gets all user
  getSkicks: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getSkick: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Saves a user to the database
  saveSkick: function(userData) {
    return axios.post("/api/users", userData);
  },
  submitemail: function(emaildata) {
    console.log("sent to api.js was " + emaildata);
    return axios.get("/send", "lipsum texty", function(emaildata){
        if(emaildata=="sent"){
          console.log("you sent stuff")
        }
        else{
          console.log("you didn't send")
        }
    })
  }
};
