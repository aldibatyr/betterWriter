const router = require("express").Router();
let Practice = require("../models/practice.model");
const PracticeService = require("../services/practiceService");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const practices = await PracticeService.getAllPractices();
      res.json(practices);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  })
  .post(async (req, res) => {
    try {
      const { title, type, description } = req.body;

      await PracticeService.createNewPractice(title, type, description);
      res.status(201).json("created");
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const practice = await PracticeService.getSpecificPractice(req.params.id);
      res.json(practice);
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  })
  .delete(async (req, res) => {
    try {
      await PracticeService.deleteSelectedPractice(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  });

module.exports = router;
