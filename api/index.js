const {GraphQLObjectType, GraphQLSchema} = require("graphql");
const {pokemons} = require("./queries");
const {pokemonAddOrUpdate, pokemonDelete} = require("./mutations");

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        pokemons: pokemons
    })
});

const RootMutations = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addOrUpdatePokemon: pokemonAddOrUpdate,
        deletePokemon: pokemonDelete
    })
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutations
});

module.exports = {
    schema
}