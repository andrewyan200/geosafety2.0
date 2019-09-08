//jshint esversion:6
const express = require('express');
const app = express();

var firebase = require("firebase/app");
var firebaseConfig = {
  apiKey: "AIzaSyCgFkUuGZW3bDldAvlREx311Ww4JfY9XLA",
  authDomain: "fir-testing-89140.firebaseapp.com",
  databaseURL: "https://fir-testing-89140.firebaseio.com",
  projectId: "fir-testing-89140",
  storageBucket: "",
  messagingSenderId: "13264613425",
  appId: "1:13264613425:web:6bc2a8965e6f2c6783a510"
};

var api = firebase.initializeApp(firebaseConfig);



//when get request to home root
app.get("/", function(req,resp){
  resp.sendFile('/Users/andrew/Documents/my-express-server/index.html');
}
);

app.get("/contact", function(req,resp){
  resp.send("Email me at andrew.m.yan@gmail.com");
});

app.listen(3000, function(){
  console.log("Server started at port 3000");

});
