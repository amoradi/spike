import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";

const renderPlayers = data => {
  if (data.loading) {
    return <li>Loading...</li>;
  }

  if (!data.players) return null;
  
  return data.players.map((player, idx) => {
    const { fName, lName, weight} = player;

    return <li key={idx}>{fName} {lName}: {weight}</li>;
  });
};

const PlayerList = props => {
  return (
    <div>
      <ul>{renderPlayers(props.data)}</ul>
    </div>
  );
};
const query = gql`
  {
    players(status: "active") {
      weight
      fName
      lName
    }
  }
`;

const PlayerListConnected = graphql(query)(PlayerList);

export { PlayerListConnected };

