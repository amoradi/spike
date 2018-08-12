import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider, graphql } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { StyleRoot } from 'radium';

import { Routes } from './shared/Routes';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Root = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <StyleRoot>
          <Routes />
        </StyleRoot>
      </ApolloProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
