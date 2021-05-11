import React from "react";
import Fifth from "../sections/Fifth";
import First from "../sections/First";
import Footer from "../components/Footer";
import Fourth from "../sections/Fourth";
import Second from "../sections/Second";
import Sixth from "../sections/Sixth";
import Third from "../sections/Third";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
          </Route>

          <Route path="/test">
            <Navbar bg="#332b2b" />
            <Sixth />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}
