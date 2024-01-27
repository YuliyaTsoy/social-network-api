const router = require("express").Router();
// Import all of the API routes
const apiRoutes = require("./api");


router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("Error. Wrong route!");
});

module.exports = router;