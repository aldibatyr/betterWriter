let User = require("../models/user.model");

const UserServices = {
  getAllUsers() {
    const users = User.find();
    return users;
  },
  getSpecificUser(userId) {
    const user = User.findById(userId);
    return user;
  },
  createNewUser(username) {
    const newUser = new User({
      username: username,
      practices: [],
    });
    return newUser.save();
  },
};

module.exports = UserServices;
