const router = require("express").Router();
const skRoutes = require("./user_query_api_routes");

// Book routes
router.use("/users", skRoutes);

module.exports = router;
