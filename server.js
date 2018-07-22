const express = require('express');
const expressGraphQL =  require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// graphQL layer
app.use('/api', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening');
});
