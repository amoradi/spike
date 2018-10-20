
const graphql = require("graphql");
const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} = graphql;
const OffensiveStats = new GraphQLObjectType({
  name: "OffensiveStats",
  fields: {
    player: { type: GraphQLString },
    game: { type: GraphQLInt },
    year: { type: GraphQLInt },
    pa: { type: GraphQLInt },
    rec: { type: GraphQLInt },
    fp: { type: GraphQLString }
  }
});

module.exports = OffensiveStats;
