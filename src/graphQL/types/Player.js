
const graphql = require("graphql");
const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = graphql;
const OffensiveStats = require("./OffensiveStats");
const Player = new GraphQLObjectType({
  name: "Player",
  fields: {
    player: { type: GraphQLString },
    fName: { type: GraphQLString },
    lName: { type: GraphQLString },
    dob: { type: GraphQLString },
    pos: { type: GraphQLString },
    number: { type: GraphQLInt },
    team: { type: GraphQLString },
    height: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    offensiveStats: {
      type: new GraphQLList(OffensiveStats),
      resolve(parentValue, args) {
        return axios
          .get(`${apiBase}/player/${parentValue.player}/offense`)
          .then(({ data }) => {
            return data.data;
          });
      }
    }
  }
});

module.exports = Player;
