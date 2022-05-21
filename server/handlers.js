"use-strict";
const { MongoClient } = require("mongodb");
const fetch = require("isomorphic-fetch");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { MONGO_URI } = process.env;
const { REACT_APP_API_KEY } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//get all movies
const getMovies = async (req, res) => {
  const { page } = req.query;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`;
  try {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return res.status(200).json({
          status: 200,
          data: data.results,
          message: "Success",
        });
      });
  } catch (err) {
    console.log(err);
  }
};
//get all trending movies
const getTrending = async (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}`;
  try {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return res.status(200).json({
          status: 200,
          data: data.results,
          message: "Success",
        });
      });
  } catch (err) {
    console.log(err);
  }
};

//gettop
const getTop = async (req, res) => {
  const { page } = req.query;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${REACT_APP_API_KEY}&page=${page}`;
  try {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return res.status(200).json({
          status: 200,
          data: data.results,
          message: "Success",
        });
      });
  } catch (err) {
    console.log(err);
  }
};

//get upcoming movies
const getUpcoming = async (req, res) => {
  const { page } = req.query;
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`;
  try {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return res.status(200).json({
          status: 200,
          data: data.results,
          message: "Success",
        });
      });
  } catch (err) {
    console.log(err);
  }
};

//Now playing movies
const getPlaying = async (req, res) => {
  const { page } = req.query;
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`;
  try {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return res.status(200).json({
          status: 200,
          data: data.results,
          message: "Success",
        });
      });
  } catch (err) {
    console.log(err);
  }
};

//search movie

const getSearch = async (req, res) => {
  const searchValue = req.query.query; //object

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${searchValue}`;
  try {
    fetch(SEARCH_API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return res.status(200).json({
          status: 200,
          data: data.results,
          message: "Success",
        });
      });
  } catch (err) {
    console.log(err);
  }
};

//actors

const getActors = async (req, res) => {
  const id = req.params.id;
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`;
  try {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return res.status(200).json({
          status: 200,
          data: data,
          message: "Success",
        });
      });
  } catch (err) {
    console.log(err);
  }
};

//add a feedback collection
//go to the queue tomorrow about batchimport
const getGenre = async (req, res) => {
  try {
    const listgenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

    if (listgenre.length > 0) {
      return res
        .status(200)
        .json({ status: 200, data: { listgenre }, message: "Success" });
    } else {
      return res.status(404).json({ status: 404, message: "Does not exist" });
    }
  } catch (err) {
    console.log({ err });
  }
};

const getUsers = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Users");

    const listUsers = await db.collection("Users").find().toArray();

    if (listUsers.length > 0) {
      return res
        .status(200)
        .json({ status: 200, data: { listUsers }, message: "Success" });
    } else {
      return res.status(404).json({ status: 404, message: "Does not exist" });
    }
  } catch (err) {
    console.log({ err });
  }
};
//get single user
const getSingleUser = async (req, res) => {
  const _id = req.params._id;
  //const email = req.params.email;
  //const password = req.params.password;
  const { email, password } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Users");
  //await
  const result = await db.collection("Users").findOne({ email: email });
  //const result2 = await db.collection("Users").find({ email }).toArray();

  // if (result) {
  if (result.password === password && result.email === email) {
    res.status(200).json({
      status: 200,
      data: result,
      message: "Success",
    });
    // }
  } else {
    res.status(404).json({
      status: 404,
      message: "Username or password are incorrect,try again !",
    });
  }
};

//get Feedback
const getFeedback = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Users");

    const listFeed = await db.collection("FeedBack").find().toArray();

    console.log(listFeed);
    if (listFeed.length > 0) {
      return res
        .status(200)
        .json({ status: 200, data: { listFeed }, message: "Success" });
    } else {
      return res.status(404).json({ status: 404, message: "Does not exist" });
    }
  } catch (err) {
    console.log({ err });
  }
};

//delete user
const deleteUser = async (req, res) => {
  const info = req.body;
  const _id = req.params._id;

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Users");
    const result = await db.collection("Users").deleteOne({ _id });

    if (result.deletedCount === 1) {
      res.status(204).json({
        status: 204,
        data: { _id },
        message: "deleted ",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "failed",
      });
    }
  } catch (err) {
    console.log({ err });
  }
};

//adduser
const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Users");

  const info = req.body;
  const data = {
    _id: uuidv4(),
    firstName: info.firstName,
    lastName: info.lastName,
    userName: info.userName,
    email: info.email,
    password: info.password,
  };
  const result = db.collection("Users").insertOne(data);
  if (result) {
    return res.status(200).json({
      status: 200,
      data: { data },
      message: "Successful",
    });
  } else {
    return res.status(404).json({
      status: 404,
      message: "failed",
    });
  }
};
//addFeedback
const addFeedback = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Users");

  const feed = req.body;
  const dataFeed = {
    _id: uuidv4(),
    firstName: feed.firstName,
    lastName: feed.lastName,
    email: feed.email,
    feedBack: feed.feedBack,
  };

  const result = db.collection("FeedBack").insertOne(dataFeed);
  if (result) {
    return res.status(200).json({
      status: 200,
      data: { dataFeed },
      message: "Successful",
    });
  } else {
    return res.status(404).json({
      status: 404,
      message: "failed",
    });
  }
};

module.exports = {
  getFeedback,
  addFeedback,
  addUser,
  deleteUser,
  getUsers,
  getSingleUser,
  getMovies,
  getTop,
  getTrending,
  getUpcoming,
  getSearch,
  getActors,
  getPlaying,
};
