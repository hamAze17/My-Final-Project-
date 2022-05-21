const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const {
  deleteUser,
  getUsers,
  addUser,
  addFeedback,
  getFeedback,
  getMovies,
  getTop,
  getSingleUser,
  getTrending,
  getUpcoming,
  getSearch,
  getActors,
  getPlaying,
} = require("./handlers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

//endpoints
app.delete("/users/:_id", deleteUser);
app.get("/users", getUsers);
app.get("/feedback", getFeedback);
app.post("/SignUp", addUser);
app.get("/genre/movie/list");
app.post("/feedBack/", addFeedback); //:_id
app.get("/movies", getMovies);
app.get("/top", getTop);
app.get("/trending", getTrending);
app.get("/upcoming", getUpcoming);
app.get("/playing", getPlaying);
app.get("/search", getSearch);
app.get("/actors/:id", getActors);

app.post("/user", getSingleUser);

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
