const express = require("express");
const app = express();
const users = require("./routes/user.js");

app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});

//Post
//Index 
app.get("/users", (req, res) => {
  res.send("GET for show users");
})

//Show 
app.get("/users/:id", (req, res) => {
    res.send("GET for user id");
})

//POST
app.post("/users", (req, res) => {
    res.send("POST for users");
})

//DELETE
app.delete("/users/:id", (req, res) => {
    res.send("DELETE for user id");
})

app.listen(3000, () => {
  console.log("server is listening to 3000");
}); 