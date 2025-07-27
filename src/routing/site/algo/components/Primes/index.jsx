import React, { useCallback, useState } from "react"
import { Grid } from "@material-ui/core"
import { Alert } from "reactstrap"
import Input from "./Input"

const Primes = () => {
  const [alert, setAlert] = useState(null)
  const [testFactor, setTestFactor] = useState(null)

  const checkPrime = useCallback((number) => {
    setAlert(null)
    if (number > 1000000 || number < 0) {
      setAlert({
        text: "Number is not supported yet. Enter in range 0 to 1000000",
        type: "danger",
      })
      return
    }

    if (number <= 1) {
      setAlert({
        text: `${number} is not a valid prime`,
        type: "danger",
      })
      return
    }

    if (number <= 3) {
      setAlert({
        text: `${number} is a valid prime`,
        type: "success",
      })
      return
    }

    if (number % 2 === 0) {
      setAlert({
        text: `${number} is composite since it is divisible by 2`,
        type: "success",
      })
      return
    }

    if (number % 3 === 0) {
      setAlert({
        text: `${number} is composite since it is divisible by 3`,
        type: "success",
      })
      return
    }

    let delay = 1000

    for (let factor = 5; factor * factor <= number; factor += 6) {
      delay = delay + 100

      if (number % factor === 0) {
        setAlert({
          text: `${number} is composite and has a factor ${factor}`,
          type: "success",
        })
        setTimeout(() => {
          setTestFactor(null)
        }, delay)
        return
      } else if (number % (factor + 2) === 0) {
        setAlert({
          text: `${number} is composite and has a factor ${factor + 2}`,
          type: "success",
        })
        setTimeout(() => {
          setTestFactor(null)
        }, delay)
        return
      } else {
        setTimeout(() => {
          setTestFactor(factor)
        }, delay)
      }
    }
    delay = delay + 1000
    setTimeout(() => {
      setTestFactor(null)
      setAlert({
        text: `${number} is a valid prime`,
        type: "success",
      })
    }, delay)
  }, [])

  return (
    <>
      <Grid container className="text-center">
        <Grid item xs={12}>
          <Input checkPrime={checkPrime} />
        </Grid>
        <Grid item xs={12}>
          {testFactor !== null && (
            <Alert color={"info"}>
              {`Number is not divisible by ${testFactor} or ${
                testFactor + 2
              }. Testing further ....`}
            </Alert>
          )}
          {alert && (
            <Alert
              color={alert.type}
              isOpen={!!alert.text}
              toggle={() => setAlert(null)}
            >
              {alert.text}
            </Alert>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default Primes
