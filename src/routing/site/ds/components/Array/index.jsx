import React, { useState, useCallback } from "react"
import Element from "common/components/Element"
import { Grid } from "@material-ui/core"
import Insert from "./Insert"
import Delete from "./Delete"
import Update from "./Update"
import Search from "./Search"

const Array = () => {
  const [state, setState] = useState({
    array: [],
    highlights: [],
  })

  const updateState = useCallback((newState) => {
    setState((prevState) => ({ ...prevState, ...newState }))
  }, [])

  return (
    <Grid container>
      <Grid container>
        <Grid item sm={12} className="mt-2">
          <Insert array={state.array} updateState={updateState} alertId={1} />
        </Grid>
        <Grid item sm={12} className="mt-2">
          <Delete array={state.array} updateState={updateState} alertId={2} />
        </Grid>
        <Grid item sm={12} className="mt-2">
          <Update array={state.array} updateState={updateState} alertId={3} />
        </Grid>
        <Grid item sm={12} className="mt-2">
          <Search array={state.array} updateState={updateState} alertId={4} />
        </Grid>
      </Grid>
      <Grid container className="mt-4 mb-4">
        {state.array.map((value, index) => {
          const highlight = state.highlights.includes(index)
          return (
            <Grid item sm={3} key={`${value}-${index}`}>
              <Element
                highlight={highlight}
                data={{ value, index }}
                type="array"
              />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Array
