import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import PlayerList from "./PlayerList";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/players" component={PlayerList} />
      </Switch>
    </div>
  );
};

export default App;
