const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: [true, "please enter the user name"],
  },
  email: {
    type: String,
    // required: [true, "please enter the email"],
  },
  password: {
    type: String,
    // required: [true, "please add the user password"],
  },
  DOB: {
    type: Date,
  },
  googleId: {
    type: String,
  },
  profilePicture: {
    type: String, // Store the URL of the profile picture
  },
});

module.exports = mongoose.model("user", userSchema);
