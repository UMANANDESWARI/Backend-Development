const express = require("express")

const FirstController = require("../Controllers/FirstController");
const route = express.Router();

route.get("/get-data", FirstController.x);

module.exports = route;
