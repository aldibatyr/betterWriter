let User = require("../models/user.model");
let Practice = require("../models/practice.model");

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
  deleteUser(userId) {
    return User.findByIdAndDelete(userId);
  },
  updateUser(userId, newUsername) {
    return User.findByIdAndUpdate(userId, {
      username: newUsername,
      updatedAt: Date.now,
    });
  },
  async addSelectedPractice(userId, practiceId) {
    const practice = await Practice.findById(practiceId);
    const user = await User.findById(userId);
    const practices = user.practices;
    return await User.findByIdAndUpdate(userId, {
      practices: [...user.practices, practice],
      updatedAt: Date.now,
    });
  },
};

module.exports = UserServices;
