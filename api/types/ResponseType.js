const {GraphQLNonNull, GraphQLObjectType, GraphQLString} = require("graphql");

const ResponseType = new GraphQLObjectType({
    name: 'Message',
    description: 'Represents a response condition',
    fields: () => ({
        message: { type: GraphQLNonNull(GraphQLString) }
    })
});

module.exports = {
    ResponseType
}