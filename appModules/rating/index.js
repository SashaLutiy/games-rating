const makeRatingFile = require("./rating-file");
const config = require('./config');
const { createRating } = require("./calculations");
const { updateRating } = require("./calculations");

module.exports = {
    makeRatingFile,
    config,
    createRating,
    updateRating,
}