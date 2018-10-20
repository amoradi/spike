
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const Team = new GraphQLObjectType({
  name: "Team",
  fields: {
    name: { type: GraphQLString },
    players: {
      type: new GraphQLList(Player),
      resolve(parentValue, args) {
        return axios
          .get(`${apiBase}/players/${parentValue.name}`)
          .then(({ data }) => data.data);
      }
    }
  }
});

module.exports = Team;
