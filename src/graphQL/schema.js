const graphql = require("graphql");
const axios = require("axios");
const apiBase = "https://armchairanalysis.com/api/1.0/test";
const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList
} = graphql;
const playerMapper = require("./mappers");

// types
const Player = require('./types/Player');
const Team = require('./types/Player');

// mega
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    player: {
      type: Player,
      args: {
        id: { type: GraphQLString },
        fName: { type: GraphQLString },
        lName: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const { status, id, fName, lName } = args;
        const token = id ? id : `${fName}_${lName}`;

        // if searching with fName_lName
        // players with same name can be returned in an []
        return axios
          .get(`${apiBase}/player/${token}`)
          .then(({ data: { data } }) => {
            const payload = Array.isArray(data) ? data[0] : data;

            return { ...payload, ...{ fName: payload.fname } };
          });
      }
    },
    players: {
      type: new GraphQLList(Player),
      args: {
        status: { type: GraphQLString },
        count: { type: GraphQLString },
        start: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const { status, count, start } = args;

        return axios
          .get(`${apiBase}/players?status=${status}`)
          .then(({ data: { data } }) =>  {
            console.log(data.slice(0, 4).map(playerMapper));
            return data.map(playerMapper);
          });
      }
    },
    team: {
      type: Team,
      args: { name: { type: GraphQLString } },
      resolve(parentValue, args) {
        return { name: args.name };
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery
});
