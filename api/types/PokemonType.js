const {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} = require("graphql");


const PokemonType = new GraphQLObjectType({
    name: 'Pokemon',
    description: 'Represents a single Pokemon',
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLString)
        },
        number: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString)},
        types: {
            type: GraphQLList(GraphQLString),
            resolve: pokemon => pokemon.types
        }
    })
});


module.exports = {
    PokemonType
}