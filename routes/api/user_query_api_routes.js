const router = require("express").Router();
const booksController = require("../../controllers/sidekickController");

// Matches with "/api/books"
router.route("/")
  .get(sidekickController.findAll)
  .post(sidekickController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(sidekickController.findById)
  .put(sidekickController.update)
  .delete(sidekickController.remove);

module.exports = router;
