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
  // Udates user record
  
  updateSkick:function(newData){
    return axios({
      method: 'post',
      url: '/api/users/'+newData.id,
      data: newData.data
    });    
  },

  // Sends email to user
  submitemail: function(emaildata) {
    console.log("sent to api.js was " + JSON.stringify(emaildata));
    return axios.post("/send", emaildata);
  },
  // returns the profile of the user logged in, has to use facebook ID to match record, can't match based on Mongo ID
  getmyprof: function(myfbid) {
    return axios.get("/api/users/me/" + myfbid);
  }  
};
