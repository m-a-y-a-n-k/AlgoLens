import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { siteSugg } from "./routes"
import { CircularProgress } from "@material-ui/core"
import { createBrowserHistory } from "history"

const history = createBrowserHistory({ basename: "/AlgoLens" })

const Dashboard = lazy(() => import(`../../dashboard/index`))
const NotFound = lazy(() => import(`./NotFound`))

export function DynamicLoader(LazyComponent, props) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyComponent {...props}>{props?.children}</LazyComponent>
    </Suspense>
  )
}

function RouteSection() {
  return (
    <main className="content">
      <Switch>
        <Route
          exact
          history={history}
          path="/"
          render={() => DynamicLoader(Dashboard)}
        />
        {siteSugg.map((site, index) => {
          const { route, path } = site
          const Component = lazy(() => import(`../${path}/index.jsx`))
          return (
            <Route
              exact
              history={history}
              path={`${route}`}
              render={() => DynamicLoader(Component)}
              key={`${index}-${path}`}
            />
          )
        })}
        <Route path="*" render={() => DynamicLoader(NotFound)} />
      </Switch>
    </main>
  )
}

export default function Routes() {
  return (
    <Router basename="/AlgoLens">
      <RouteSection />
    </Router>
  )
}
