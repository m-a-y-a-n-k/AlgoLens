import React, { useState, lazy, useCallback, useMemo } from "react"
import { FaEquals, FaCircle } from "react-icons/fa"
import { Grid } from "@material-ui/core"
import { Alert } from "reactstrap"
import { FixedSizeList as List } from "react-window"
import Input from "./Input"

const LazyElement = lazy(() => import("common/components/Element"))

const Factorize = () => {
  const [input, setInput] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [alert, setAlert] = useState(null)

  const factorize = useCallback((number) => {
    setDisabled(true)
    if (number < 0 || !Number.isInteger(number)) {
      setAlert({
        type: "danger",
        text: "Factors will be shown for only whole numbers",
      })
      setDisabled(false)
      return []
    }
    if (number <= 1) {
      setAlert({
        type: "success",
        text: "Factors are shown in sorted order",
      })
      setDisabled(false)
      return [number] // Handle edge cases for 0 and 1
    }

    const factors = []
    const sqrtN = Math.sqrt(number)

    // Check 2 separately to allow skipping even numbers later
    if (number % 2 === 0) {
      factors.push(2)
      if (2 !== number / 2) {
        factors.push(number / 2)
      }
    }

    // Check odd numbers from 3 onwards
    for (let i = 3; i <= sqrtN; i += 2) {
      if (number % i === 0) {
        factors.push(i)
        if (i !== number / i) {
          factors.push(number / i)
        }
      }
    }

    factors.push(1)
    if (number !== 1) {
      factors.push(number)
    }

    factors.sort((a, b) => a - b)
    setAlert({
      type: "success",
      text: "Factors are shown in sorted order",
    })
    setDisabled(false)
    return factors
  }, [])

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
          <Input setData={setInput} disabled={disabled} />
        </Grid>
      </Grid>

      {parseInt(input) >= 0 && (
        <Grid container className="text-center mt-4 mb-4 align-items-center">
          <Grid item xs={3}>
            <LazyElement
              highlight={true}
              data={{ value: `Factors(${input})` }}
              type="Array"
            />
          </Grid>
          <Grid item xs={3}>
            <FaEquals style={{ margin: "auto 5px" }} />
          </Grid>
          <Grid item xs={6}>
            <LazyList factorize={factorize} input={input} />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

const LazyList = ({ input, factorize }) => {
  const factors = useMemo(() => factorize(input), [input])

  return (
    <List
      height={80}
      itemCount={factors.length}
      itemSize={400}
      width={window.innerWidth * 0.5}
      direction="horizontal"
    >
      {({ index, style }) => (
        <Grid
          container
          item
          xs={12}
          style={style}
          className="align-items-center"
        >
          <Grid item xs={6}>
            <LazyElement data={{ value: factors[index] }} type="Array" />
          </Grid>
          {index < factors.length - 1 && (
            <Grid item xs={6}>
              <FaCircle style={{ margin: "auto 5px", alignSelf: "center" }} />
            </Grid>
          )}
        </Grid>
      )}
    </List>
  )
}

export default Factorize
