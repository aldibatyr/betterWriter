const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const practiceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    userInput: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Practice = mongoose.model("Practice", practiceSchema);

module.exports = Practice;
