import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function Routes() {
  const [isLogged, setIsLogged] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("@khub:token")) {
      setIsLogged(true);
      history.push("/home");
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Switch>
      <Route exact path={"/login"}>
        <Login isLogged={isLogged} setIsLogged={setIsLogged} />
      </Route>
      <Route exact path={"/register"}>
        <Register isLogged={isLogged} />
      </Route>
      <Route exact path={"/home"}>
        <Home isLogged={isLogged} setIsLogged={setIsLogged} />
      </Route>
      <Route path={"/"}>
        <>{isLogged ? history.push("/home") : history.push("/login")}</>
      </Route>
    </Switch>
  );
}

export default Routes;
