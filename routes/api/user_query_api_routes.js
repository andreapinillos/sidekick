const router = require("express").Router();
const booksController = require("../../controllers/sidekickController");

// Matches with "/api/users"
router.route("/")
  .get(sidekickController.findAll)
  .post(sidekickController.create);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(sidekickController.findById)
//   .put(sidekickController.update)
//   .delete(sidekickController.remove);

module.exports = router;
