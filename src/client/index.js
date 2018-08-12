import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider, graphql } from "react-apollo";
import { BrowserRouter } from "react-router-dom";

import { Routes } from './Routes';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Root = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
