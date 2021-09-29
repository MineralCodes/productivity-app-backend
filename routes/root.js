const express = require("express");
const router = express.Router();

router.get("/alltasks", function (req, res) {
	res.send({ type: "GET" });
});

router.post("/alltasks", function (req, res) {
	res.send({
		type: "POST",
		name: req.body.name,
		roll: req.body.roll,
	});
});

router.put("/alltasks/:id", function (req, res) {
	res.send({ type: "PUT" });
});
router.delete("/alltasks/:id", function (req, res) {
	res.send({ type: "DELETE" });
});

module.exports = router;
