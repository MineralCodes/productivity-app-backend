const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const app = express();

mongoose.connect(
	`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@todo-app.d5nfj.mongodb.net/tasks?retryWrites=true&w=majority`
);

mongoose.Promise = global.Promise;

app.use(express.static("public"));
app.use(express.json());

app.use("/", require("./routes/root"));

app.use(function (err, req, res, next) {
	res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 3000, function () {
	console.log(
		`Now listening for request on port ${process.env.port || 3000}`
	);
});
