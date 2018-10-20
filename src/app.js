const express = require("express");
const expressGraphQL = require("express-graphql");
const path = require("path");
const schema = require("./graphQL/schema");
const app = express();

// =========================
//          graphQL 
// =========================
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: false
  })
);

// =========================
//          webpack
// =========================
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

// =========================
//         boot up
// =========================
app.listen(4000, () => {
  console.log("######## Listening on 4000");
});

// ===========================================================================
//           catch-all route | let react router handle everything
// ===========================================================================
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
