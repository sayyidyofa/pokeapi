const {GraphQLInt, GraphQLList} = require("graphql");
const {PokemonType} = require("../types");
const { Pokemon } = require("../../models");

const pokemons = {
    type: GraphQLList(PokemonType),
    description: "List of multiple pokemons in a limited amount",
    args: {
        limit: { type: GraphQLInt }
    },
    resolve: (parent, args) => Pokemon.find({}).limit(args.limit).exec()
};

module.exports = {
    pokemons
}