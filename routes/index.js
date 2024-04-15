import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Contact Tracer",
  });
});

router.get("/mycontacts", function (req, res, next) {
  res.render("user/mycontacts", {
    title: "Contact Tracer",
  });
});

export default router;
