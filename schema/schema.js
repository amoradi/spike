const graphql = require('graphql');
const axios = require('axios');
const apiBase = 'https://armchairanalysis.com/api/1.0/test';
const { 
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList
} = graphql;

const OffensiveStats = new GraphQLObjectType({
    name: 'OffensiveStats', 
    fields: {
        player: { type: GraphQLString },
        game: { type: GraphQLInt }, 
        year: { type: GraphQLInt },
        pa: { type: GraphQLInt },
        rec: { type: GraphQLInt },
        fp: { type: GraphQLString }
    }
});

const Player = new GraphQLObjectType({
    name: 'Player',
    fields: {
        player: { type: GraphQLString}, 
        fName: { type: GraphQLString},
        lName: { type: GraphQLString},
        dob: { type: GraphQLString},
        pos: { type: GraphQLString},
        number: { type: GraphQLInt},
        team: { type: GraphQLString},
        height: { type: GraphQLInt},
        weight: { type: GraphQLInt},
        offensiveStats: {
            type: GraphQLList(OffensiveStats),
            resolve(parentValue, args) {
                return axios.get(`${apiBase}/player/${parentValue.player}/offense`)
                    .then(({ data }) => {
                        
                        return data.data;
                    });
            }
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        player: {
            type: Player, 
            args: { id: { type: GraphQLString }, fName: { type: GraphQLString }, lName: { type: GraphQLString }},
            resolve(parentValue, args) {
                const { status, id, fName, lName } = args;
                const token = id ? id : `${fName}_${lName}`;

                return axios.get(`${apiBase}/player/${token}`)
                    .then(({ data: { data }}) => {
                        return Array.isArray(data) ? data[0] : data;
                    });
            }
        },
        players: {
            type: GraphQLList(Player), 
            args: { status: { type: GraphQLString }, count: { type: GraphQLString }, start: { type: GraphQLString }},
            resolve(parentValue, args) {
                const { status, count, start } = args;

                return axios.get(`${apiBase}/players?status=${status}`)
                    .then(({ data: { data }}) => data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
