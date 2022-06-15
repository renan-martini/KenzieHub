import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function Routes() {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <Login />
      </Route>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/home"}></Route>
    </Switch>
  );
}

export default Routes;
