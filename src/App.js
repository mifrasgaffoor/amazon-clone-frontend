import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";
const App = () => {
  const [{}, dispacth] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS >>>>>", authUser);

      if (authUser) {
        dispacth({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispacth({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
