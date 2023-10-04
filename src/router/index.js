const router = require("express").Router();

router.get("/", (request, response, next) => {
  response.send("Home page");
});

router.post("/register", (request, response, next) => {});
router.get("/verify-token/:token", (request, response, next) => {});
router.post("/set-password/:token", (request, response, next) => {});

router.post("/login", (request, response, next) => {});
router.get(
  "/me",
  (request, response, next) => {},
  (request, response, next) => {}
);

router.post(
  "/logout",
  (request, response, next) => {},
  (request, response, next) => {}
);
module.exports = router;
