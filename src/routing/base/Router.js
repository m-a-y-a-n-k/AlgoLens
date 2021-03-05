import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { siteSugg } from "./routes";
import { CircularProgress } from "@material-ui/core";

const Dashboard = lazy(() => import(`../../dashboard/index`));
const NotFound = lazy(() => import(`./NotFound`));

function DynamicLoader(LazyComponent) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyComponent />
    </Suspense>
  );
}

function RouteSection() {
  return (
    <section className="content">
      <Switch>
        <Route exact path="/" render={() => DynamicLoader(Dashboard)} />
        {siteSugg.map((site, index) => {
          const { route, path } = site;
          const Component = lazy(() => import(`../${path}/index`));
          return (
            <Route
              exact
              path={`${route}`}
              render={() => DynamicLoader(Component)}
              key={`${index}-${path}`}
            />
          );
        })}
        <Route path="*" render={() => DynamicLoader(NotFound)} />
      </Switch>
    </section>
  );
}

export default function Routes() {
  return (
    <Router>
      <RouteSection />
    </Router>
  );
}
