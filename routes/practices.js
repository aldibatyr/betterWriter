const router = require("express").Router();
let Practice = require("../models/practice.model");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const practices = await Practice.find();
      res.json(practices);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  })
  .post(async (req, res) => {
    try {
      const { title, type, description } = req.body;

      const newPractice = new Practice({
        title,
        type,
        description,
        userInput: "",
      });

      await newPractice.save();
      res.status(201).json("created");
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  });

module.exports = router;
