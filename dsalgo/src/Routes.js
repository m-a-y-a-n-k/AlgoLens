import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import asyncComponent from "./AsyncComponent";
import { routes } from "./config/routes";
import NotFound from "./dashboard/NotFound";

const history = createBrowserHistory();

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <section className="content">
          <Switch>
            {routes.map((path, key) => {
              let comp = asyncComponent(() =>
                // variable import throws error ,path should be statically prefixed and suffixed
                import(`./site/${path}/index.js`).then(module => module.default)
              );
              return <Route key={key + path} path={`/${path}`} component={comp} />;
            })}
            <Route path="*" component={NotFound} />
          </Switch>
        </section>
      </Router>
    );
  }
}
