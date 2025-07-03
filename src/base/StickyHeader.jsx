import React, { lazy } from "react"
import { siteSuggestions } from "routing/base/routes"
import { DynamicLoader } from "routing/base/Router"
import constants from "common/helpers/constants"
import "./Header.css"

const Search = lazy(() => import(`common/components/SearchSuggestions`))
const FixedSideDrawer = lazy(() => import(`base/FixedSideDrawer`))

export default function PrimarySearchAppBar() {
  return (
    <header className="app-bar">
      <nav className="toolbar">
        <section className="menu-sec">{DynamicLoader(FixedSideDrawer)}</section>
        <section className="search-sec">
          {DynamicLoader(Search, {
            id: "sitemapSuggestions",
            searchOps: siteSuggestions,
            updateSelection: (selection) => {
              window.location.hash = selection.route
            },
          })}
        </section>
        <div className="icon-sec">
          <a
            aria-label="home page"
            href={`/${constants.BRAND_NAME}`}
            className={`home-button ${
              window.location.pathname === `/${constants.BRAND_NAME}`
                ? "disabled"
                : ""
            }`}
          >
            {DynamicLoader(lazy(() => import(`@material-ui/icons/Home`)))}
          </a>
        </div>
      </nav>
    </header>
  )
}
