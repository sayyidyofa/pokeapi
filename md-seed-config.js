const mongoose  = require('mongoose');
const { PokemonSeeder } = require('./seeders');
const {ATLAS_URI} = require("./config");

const mongoURL = ATLAS_URI;

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
exports.seedersList = {
    PokemonSeeder
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
exports.connect = async () =>
    await mongoose.connect(mongoURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
exports.dropdb = async () => mongoose.connection.db.dropDatabase();
