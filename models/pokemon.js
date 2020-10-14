const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    types: {
        type: [String],
        required: true
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;