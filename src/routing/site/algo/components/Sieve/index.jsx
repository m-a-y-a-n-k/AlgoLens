import React, { lazy, useCallback, useState, Suspense, useMemo } from "react"
import { Grid } from "@material-ui/core"
import { Alert } from "reactstrap"
import Range from "./Range"
import { FixedSizeList as List } from "react-window"

const LazyElement = lazy(() => import("common/components/Element"))

const Sieve = () => {
  const [alert, setAlert] = useState(null)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(-1)

  const handleRangeSubmit = useCallback((start, end) => {
    setStart(start)
    setEnd(end)
  }, [])

  const sieve = useCallback((start, end) => {
    if (end - start >= 1000 || end > 100000000) {
      setAlert({ text: "Too big range not supported yet", type: "danger" })
      return []
    }
    if (start > end) {
      return []
    }
    let numbers = []
    let primes = new Set()
    let nonPrimes = new Set()
    for (let num = start; num <= end; num++) {
      numbers.push({ value: num, prime: num >= 2 })
    }
    for (let p = 2; p * p <= end; p++) {
      if (!nonPrimes.has(p)) {
        primes.add(p)
        for (let x = 2 * p; x <= end; x += p) {
          nonPrimes.add(x)
        }
      }
    }
    primes.forEach((prime) => {
      let s = (start + prime - 1) % prime // Adjust for start value
      for (; s < end - start; s += prime) {
        numbers[s].prime = false
      }
    })
    setAlert({
      text: "The prime ones are highlighted in green",
      type: "success",
    })
    return numbers
  }, [])

  return (
    <>
      {alert && (
        <Alert
          color={alert.type}
          isOpen={!!alert.text}
          toggle={() => setAlert(null)}
        >
          {alert.text}
        </Alert>
      )}
      <Grid container>
        <Grid container className="text-center">
          <Grid item xs={12}>
            <Range handleRangeSubmit={handleRangeSubmit} />
          </Grid>
        </Grid>
        <Grid container className="mt-4 mb-4 text-center">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyList start={start} end={end} sieve={sieve} />
          </Suspense>
        </Grid>
      </Grid>
    </>
  )
}

const LazyList = ({ start, end, sieve }) => {
  const data = useMemo(() => sieve(start, end), [start, end])

  return (
    <List height={400} itemCount={data.length} itemSize={100} width={"100%"}>
      {({ index, style }) => (
        <Grid item xs={12} style={style}>
          <LazyElement
            highlight={data[index].prime}
            data={{ value: data[index].value, index }}
            type="array"
          />
        </Grid>
      )}
    </List>
  )
}

export default Sieve
