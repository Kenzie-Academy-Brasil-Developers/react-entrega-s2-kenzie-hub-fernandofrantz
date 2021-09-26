import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
