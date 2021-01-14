import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../components/Home";
import Accounts from "../components/Accounts";
import Account from "../components/Account";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/accounts" exact component={Accounts} />
      <Route path="/accounts/:name" component={Account} />
    </BrowserRouter>
  );
}

export default Routes;
