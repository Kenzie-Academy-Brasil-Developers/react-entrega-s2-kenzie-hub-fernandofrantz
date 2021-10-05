import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import { useState } from "react";

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/home">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
