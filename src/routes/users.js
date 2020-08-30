const router = require("express").Router();
let User = require("../models/user.model");
const UserServices = require("../services/usersService");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await UserServices.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  })
  .post(async (req, res) => {
    try {
      const username = req.body.username;

      const newUser = {
        username: username,
        practices: [],
      };

      await UserServices.createNewUser(newUser);
      res.status(201).json("created");
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const user = await UserServices.getSpecificUser(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json(`Error ${error}`);
    }
  })
  .patch(async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        updatedAt: Date.now,
      });
      res.status(204);
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  })
  .delete(async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  });

module.exports = router;
