const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { users } = require("./data.js");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mappedUsers = users.map((user) => {
  return user;
});

const batchImport = async (dbName) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db(dbName);
    db.collection("Users").insertMany(mappedUsers);

    client.close();
  } catch (err) {
    console.log(err);
  }
};

batchImport("Users");
