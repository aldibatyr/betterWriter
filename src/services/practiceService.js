let Practice = require("../models/practice.model");

const PracticeService = {
  getAllPractices() {
    return Practice.find();
  },
  getSpecificPractice(practiceId) {
    const practice = Practice.findById(practiceId);
    return practice;
  },
  createNewPractice(title, type, description) {
    // TODO: see if there is a way to do a spread operator.
    const newPractice = new Practice({
      title,
      type,
      description,
      userInput: "",
    });

    return newPractice.save();
  },
  deleteSelectedPractice(practiceId) {
    return Practice.findByIdAndDelete(practiceId);
  },
};

module.exports = PracticeService;
