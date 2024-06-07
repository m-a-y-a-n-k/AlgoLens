import React, { useState, lazy, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { Alert } from "reactstrap"
import { FixedSizeList as List } from "react-window"
import Input from "./Input"
import useWindowDimensions from "common/helpers/dimensions"

const LazyElement = lazy(() => import("common/components/Element"))

const Fibonacci = () => {
  const [input, setInput] = useState(null)
  const [sequence, setSequence] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [alert, setAlert] = useState(null)

  const updateSequence = (delay) => {
    setTimeout(() => {
      setSequence((prevSequence) => {
        return prevSequence.concat([
          prevSequence[prevSequence.length - 1] +
            prevSequence[prevSequence.length - 2],
        ])
      })
    }, delay)
  }

  const generateSequence = (input) => {
    if (input < 2) {
      setAlert({
        text: "Input should be greater than 2",
        type: "danger",
      })
    } else {
      setInput(input)
      setDisabled(true)
      setAlert(null)
      setSequence([0, 1])
      for (let num = 2; num <= input; ++num) {
        updateSequence(num * 100)
      }
    }
  }

  useEffect(() => {
    if (sequence.length === parseInt(input)) {
      setAlert({
        text: "Sequence has been generated",
        type: "success",
      })
      setDisabled(false)
    }
  }, [sequence.length, input])

  return (
    <Grid container>
      {alert && (
        <Grid item xs={12}>
          <Alert
            color={alert.type}
            isOpen={!!alert.text}
            toggle={() => setAlert(null)}
          >
            {alert.text}
          </Alert>
        </Grid>
      )}
      <Grid container className="text-center">
        <Grid item xs={12}>
          <Input generateSequence={generateSequence} disabled={disabled} />
        </Grid>
      </Grid>

      {parseInt(input) >= 2 && sequence.length > 0 && (
        <Grid container className="text-center mt-4 mb-4">
          <LazyList sequence={sequence} />
        </Grid>
      )}
    </Grid>
  )
}

const LazyList = ({ sequence }) => {
  const { width: innerWidth } = useWindowDimensions()

  return (
    <List
      height={120}
      itemCount={sequence.length}
      itemSize={400}
      width={innerWidth}
      direction="horizontal"
    >
      {({ index, style }) => (
        <Grid item xs={12} style={style} className="align-items-center">
          <LazyElement
            data={{ value: sequence[index], index }}
            highlight={index === sequence.length - 1}
            type="array"
          />
        </Grid>
      )}
    </List>
  )
}

export default Fibonacci
