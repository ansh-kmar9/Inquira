const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.set("view engine", "ejs");
//set the views directory
// This is where the ejs files are stored
app.set("views", path.join(__dirname, "views"));
// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

const port = 8080;

let posts = [
  {
    id: uuidv4(),
    username: "ansh",
    content: "This is my first post",
  },
  {
    id: uuidv4(),
    username: "sam",
    content: "sam is my name",
  },
  {
    id: uuidv4(),
    username: "john",
    content: "john is my name",
  },
];

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
   posts = posts.filter((p) => id !== p.id);
 res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
