const graphql = require('graphql');
const { 
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} = graphql;

const Player = new GraphQLObjectType({
    name: 'Player',
    fields: {
        id: { type: GraphQLString}, 
        fName: { type: GraphQLString},
        lName: { type: GraphQLString},
        dob: { type: GraphQLString},
        pos: { type: GraphQLString},
        number: { type: GraphQLInt},
        team: { type: GraphQLString},
        height: { type: GraphQLInt},
        weight: { type: GraphQLInt},
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        player: {
            type: Player, 
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args) {

            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
