const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const session = require("express-session");

const passport = require("passport");
const dotenv = require("dotenv").config();
const path = require("path");
const connectdb = require("./util/mongoDB");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.TOKEN_SECRET, // Change this to a secret key for session encryption
  resave: false,
  saveUninitialized: true
}));
require("./middleware/passport-setup");
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
connectdb();

const UserRouter = require("./routes/User");
const QuestionRouter = require("./routes/Question");
const AnswerRouter = require("./routes/Answer");
const UpvoteRouter = require("./routes/UpVote");
const DownvoteRouter = require("./routes/DownVote");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING on home page");
});
app.use("/User", UserRouter);
app.use("/Question", QuestionRouter);
app.use("/Answer", AnswerRouter);
app.use("/upvote", UpvoteRouter);
app.use("/downvote", DownvoteRouter);
app.listen(port, () => {
  console.log("server is live");
});
