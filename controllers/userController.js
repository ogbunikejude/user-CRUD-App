const User = require("../models/userModel");

// Create new user
exports.createNewUser = (req, res) => {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ status: "Error", message: err });
      } else {
        return res.status(200).json({
          status: "success",
          message: "User created successfully",
          newUser,
        });
      }
    }
  );
};
// Fetch all Users
exports.fetchUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).json({ status: "Error", message: err });
    } else if (!users) {
      return res
        .status(404)
        .json({ message: "users not found, kindly add a user" });
    } else {
      return res.status(200).json({
        status: "Success",
        message: "Users fetched successfully",
        users,
      });
    }
  });
};
// Fetch single User
exports.fetchSingleUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).json({ status: "Error", message: err });
    } else if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.status(200).json({
        status: "Success",
        message: "User fetched successfully",
        user,
      });
    }
  });
};
// Update User
exports.updateSingleUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await User.findByIdAndUpdate(id, data, { new: true }, (err, user) => {
    if (err) {
      return res.status(500).json({ status: "Error", message: err });
    } else if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.status(200).json({
        status: "Success",
        message: "User updated successfully",
        user,
      });
    }
  });
};
// Delete User
exports.deleteSingleUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id, (err, user) => {
    if (err) {
      return res.status(500).json({ status: "Error", message: err });
    } else if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.status(200).json({
        status: "Success",
        message: "User deleted successfully",
        user: null,
      });
    }
  });
};
