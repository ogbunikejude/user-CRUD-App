// Setup and validate User Schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
  },
  country: {
    type: String,
    required: [true, "Your country of origin is required"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
