const { Seeder } = require("mongoose-data-seed");
const { Pokemon } = require("../models");

class PokemonSeeder extends Seeder {
    constructor() {
        super();
    }

    async shouldRun() {
        return Pokemon
            .countDocuments()
            .exec()
            .then(count => count === 0)
    }

    async run() {
        return Pokemon.create(this.pokemonSeed);
    }

    async beforeRun() {
        this.pokemonSeed = [
            {
                id: "b30afbf0-9ab4-45b7-9aec-04983a180a53",
                number: "001",
                name: "Peko",
                types: [
                    "Grass", "Alien", "Yoyo"
                ]
            },
            {
                id: "57072197-e96e-4bf7-83e9-23c740183216",
                number: "002",
                name: "Bulbasaur",
                types: [
                    "Grass", "Poison"
                ]
            },
            {
                id: "cb0c9d4b-9013-4cf0-9bac-a716f4d3172d",
                number: "003",
                name: "Pekora",
                types: [
                    "Water", "Plasma", "Void"
                ]

            }
        ];
        await Pokemon.deleteMany({});
    }
}

module.exports = {
    PokemonSeeder
}