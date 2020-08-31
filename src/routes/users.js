const router = require("express").Router();
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
      await UserServices.createNewUser(req.body.username);
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
      await UserServices.updateUser(req.params.id, req.body.username);
      res.status(201).json("updated");
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  })
  .delete(async (req, res) => {
    try {
      await UserServices.deleteUser(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  });

router.route("/:id/addPractice").patch(async (req, res) => {
  try {
    await UserServices.addSelectedPractice(req.params.id, req.query.practiceId);
    res.status(201).json("done");
  } catch (error) {
    res.status(500).json(`Error: ${error}`);
  }
});

module.exports = router;
