"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("dotenv/config");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 7000;
app.get("/", function (req, res) {
    res.send("Hey, working...");
});
app.listen(PORT, function () {
    console.log("Server is running on PORT ".concat(PORT));
});
