import React, { useState, lazy, useEffect } from "react"
import { FaEquals, FaTimes } from "react-icons/fa"
import { Grid } from "@material-ui/core"
import { Alert } from "reactstrap"
import Input from "routing/site/algo/components/Factorial/Input"

const Element = lazy(() => import("common/components/Element"))

const Factorial = () => {
  const [input, setInput] = useState(null)
  const [result, setResult] = useState(null)
  const [processed, setProcessed] = useState(null)
  const [rest, setRest] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [alert, setAlert] = useState(null)

  const computeFactorial = (currentValue) => {
    if (currentValue <= 0) {
      setTimeout(() => {
        setDisabled(false)
        setAlert({
          text: "Factorial successfully computed",
          type: "success",
        })
        setInput(null)
        setProcessed(null)
        setRest(null)
      }, 500)
      return
    }
    setTimeout(() => {
      setProcessed((prevProcessed) => `${prevProcessed} X ${currentValue}`)
      setProcessed((prevProcessed) => {
        const processedNumbers = prevProcessed.split(" X ").map(Number)
        if (processedNumbers.length === 2) {
          const [a, b] = processedNumbers
          return (a * b).toString()
        }
        return prevProcessed
      })
      setRest(currentValue - 1)
      computeFactorial(currentValue - 1)
    }, 500)
  }

  const fact = (input) => {
    if (input >= 0 && input <= 1) {
      setAlert({
        text: "Factorial is 1",
        type: "success",
      })
    } else if (input >= 2 && input <= 50) {
      setInput(input)
      setDisabled(true)
      setProcessed(input > 1 ? `${input}` : `1`)
      setRest(input >= 2 ? input - 1 : 1)
      setAlert(null)
      computeFactorial(input - 1)
    } else {
      setAlert({
        text: "Factorial does not exist or too large",
        type: "danger",
      })
    }
  }

  useEffect(() => {
    const updateResult = () => {
      if (processed) {
        const processedNumbers = processed.split(" X ").map(Number)
        if (processedNumbers.length === 2) {
          const [a, b] = processedNumbers
          if (b === 1) setResult((a * b).toString())
        }
      }
    }
    updateResult()
  }, [processed])

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
          <Input fact={fact} setResult={setResult} disabled={disabled} />
        </Grid>
      </Grid>

      {parseInt(input) >= 0 && (
        <Grid container className="text-center mt-4 mb-4">
          <Grid item xs={2}>
            <Element
              highlight={true}
              data={{ value: `${input}!` }}
              type="array"
            />
          </Grid>
          <Grid item xs={2}>
            <FaEquals style={{ margin: "auto 5px" }} />
          </Grid>
          <Grid item xs={3}>
            <Element data={{ value: processed }} type="array" />
          </Grid>
          <Grid item xs={2}>
            <FaTimes style={{ margin: "auto 5px" }} />
          </Grid>
          <Grid item xs={3}>
            <Element data={{ value: `${rest}!` }} type="array" />
          </Grid>
        </Grid>
      )}
      {parseInt(result) >= 0 && (
        <Grid container className="text-center mt-4 mb-4">
          <Grid item xs={12}>
            <Element
              highlight={true}
              data={{ value: `${result}` }}
              type="array"
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Factorial
