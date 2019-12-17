const express = require('express');
const fakePosts = require('./data/posts');
const fakeComments = require('./data/comments');
const route = require("./routes/index");
const app = express();
const port = 8000;

// Get a list of posts
app.use("/api", route)

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
