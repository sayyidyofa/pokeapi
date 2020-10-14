const {GraphQLID, GraphQLList, GraphQLString} = require("graphql");
const {ResponseType} = require("../types/ResponseType")
const {Pokemon} =require("../../models");

const pokemonDelete = {
    type: ResponseType,
    description: 'Destroy a Pokemon T_T',
    args: {
        id: { type: GraphQLID }
    },
    resolve: (parent, args) => {
        Pokemon.findOneAndDelete({ pokeid: args.id }).exec();
        return { message: "OK" };
    }
}

const pokemonAddOrUpdate = {
    type: ResponseType,
    description: 'Add new Pokemon or update existing Pokemon',
    args: {
        id: { type: GraphQLString },
        number: { type: GraphQLString },
        name: { type: GraphQLString },
        types: { type: GraphQLList(GraphQLString) }
    },
    resolve: (parent, args) => {
        Pokemon.findOne({ id: args.id })
            .then(pokemon => {
                pokemon.number = args.number;
                pokemon.name = args.name;
                pokemon.types = args.types;
                pokemon.save();
            })
            .catch(err => {
                new Pokemon({ id: args.id, number: args.number, name: args.name, types: args.types }).save()
            });
        return { message: "OK" };
    }
}

module.exports = {
    pokemonDelete,
    pokemonAddOrUpdate
}