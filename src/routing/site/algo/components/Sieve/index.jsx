import React, { lazy, useCallback, useState, Suspense, useEffect } from "react"
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
    if (end - start >= 1000000 || end > 100000000) {
      setAlert({
        text: "Range is too big and not supported yet",
        type: "danger",
      })
      return []
    }
    if (start > end) {
      return []
    }
    const isPrime = Array(end - start + 1).fill(true)

    if (start <= 1) {
      for (let i = 0; i <= Math.min(end, 1) - start; i++) {
        isPrime[i] = false
      }
    }

    for (let p = 2; p * p <= end; p++) {
      let startIdx = Math.max(p * p, Math.ceil(start / p) * p)
      if (startIdx > end) continue

      for (let multiple = startIdx; multiple <= end; multiple += p) {
        isPrime[multiple - start] = false
      }
    }

    setAlert({
      text: "The prime ones are highlighted in green",
      type: "success",
    })
    return isPrime
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
  const [numbers, setNumbers] = useState([])
  const [isPrime, setIsPrime] = useState([])

  useEffect(() => {
    setNumbers(
      Array.from({ length: end - start + 1 }).map((_, index) => index + start)
    )
    setIsPrime(sieve(start, end))
  }, [start, end])

  return (
    <List
      height={120}
      itemCount={numbers.length}
      itemSize={200}
      width={window.innerWidth || 800}
      direction="horizontal"
    >
      {({ index, style }) => (
        <Grid item xs={12} style={style}>
          <LazyElement
            highlight={isPrime[index]}
            data={{ value: numbers[index], index }}
            type="array"
          />
        </Grid>
      )}
    </List>
  )
}

export default Sieve
