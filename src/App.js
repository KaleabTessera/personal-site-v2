import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

// Featured
import Index from "./views/Index";
import About from "./views/About";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import Research from "./views/Research";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

import ReactGA from "react-ga";
import history from "./History";

// All of our CSS
import "./css/App.scss";
// url search parameters, in our case ?path=[:slug]
const params = window.location.search;

let path = "/"; // path we will redirect to if param exits

if (params.search("path=") > -1) {
  // check if exists
  path = params.substr(1 + "path=".length).trim();
}

ReactGA.initialize('UA-163842631-1'); 

ReactGA.pageview(window.location.pathname + window.location.search);
history.listen(location => {
  ReactGA.pageview(location.pathname + location.search);
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (path !== "/" ? <Redirect to={path} /> : <Index />)}
          />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/research" component={Research} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          {/* Only useful in development mode */}
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
