const path = require("path");
const router = require("express").Router();

router.get("/", (request, response) => {
  res.sendFile(path.join(_direname, "..public/index.html"));
});

router.get("/exercise", (request, response) => {
  res.sendFile(path.join(_direname, "..public/exercise.html"));
});

router.get("/stats", (request, response) => {
  res.sendFile(path.join(_direname, "..public/stats.html"));
});

module.exports = router;
