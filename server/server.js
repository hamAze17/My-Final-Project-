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
} = require("./handlers");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
//const API_KEY = "api_key=93707bbd999b76530426a2e36710f747";
//const API_KEY = "93707bbd999b76530426a2e36710f747";

//const BASE_URL = "https://api.themoviedb.org/3";
// export const BASE_API = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
// });
// export const fetchTopRatedMovies = (page) =>
//   BASE_API.get(`/movie/top_rated?api_key=${API_KEY}&page=${page}`);

// const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
// const searchURL = BASE_URL + "/search/movie?" + API_KEY;

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/certification/movie/list", (req, res) => {
  //res.send({ express: "Hello From Express" });
  const cert = req.body;
  console.log(cert);
  res.send({ cert });
});

const fetchMovie = async (id) => {
  const { data } = await axios.get();
};

// app.get("/movie/popular", (req, res) => {
//   //res.send({ express: "Hello From Express" });
//   const movie = req.body;
//   const id = req.params.id;
//   console.log(mov);
//   console.log(id);
//   res.send({ movie });
// });

// // app.get(
// //   "https://api.themoviedb.org/3/movie/popular?api_key=93707bbd999b76530426a2e36710f747&language=en-US&page=1",
// //   (res, res) => {
// //     const movie = req.body;
// //     console.log(movie);
// //   }
// // );

// const options = {
//   method: "GET",
//   url: "https://unogs-unogs-v1.p.rapidapi.com/title/details",
//   params: { netflix_id: "<REQUIRED>" },
//   headers: {
//     "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

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
