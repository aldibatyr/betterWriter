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
  createNewUser(user) {
    const newUser = new User(user);
    return newUser.save();
  },
};

module.exports = UserServices;
