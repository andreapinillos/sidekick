const router = require("express").Router();
const sidekickController = require("../../controllers/sidekickController");

// Matches with "/api/users"
router.route("/")
  .get(sidekickController.findAll)
  .post(sidekickController.create);

//Matches with "/api/users/:id"
router
  .route("/:id")
  .get(sidekickController.findById)
  .post(sidekickController.update)
  .delete(sidekickController.remove);

router
.route("/me/:fbid")
.get(sidekickController.findByFBid)
.put(sidekickController.update);

module.exports = router;
