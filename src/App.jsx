import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import People from "./components/People";
import PeopleDetail from "./components/PeopleDetail";
import Films from "./components/Films";
import FilmsDetail from "./components/FilmsDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {/* Link to Home page.*/}
        </Route>
        <Route exact path="/films">
          {/* Link to Films.jsx */}
          <Films />
        </Route>
        <Route exact path="/films/:filmid">
          {/* Link to Films.jsx */}
          <FilmsDetail />
        </Route>
        <Route exact path="/people">
          {/* Link to People.jsx */}
          <People />
        </Route>
        <Route exact path="/people/:peopleid">
          {/* Link to People.jsx */}
          <PeopleDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;