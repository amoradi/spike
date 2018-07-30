const express = require("express");
const expressGraphQL = require("express-graphql");
const path = require("path");

const schema = require("./schema/schema");

const app = express();

// graphQL layer
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: false
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(4000, () => {
  console.log("Listening");
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
