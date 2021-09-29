import React from "react";
import { Switch, Route } from "react-router-dom";

import Airline from "./Airline/Airline";
import Airlines from "./Airlines/Airlines";
import RequestAssist from "./common/apicall/RequestAssist";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
      </Switch>
      <RequestAssist />
    </>
  );
}

export default App;
