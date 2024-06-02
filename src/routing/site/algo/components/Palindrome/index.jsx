import React, { Suspense, lazy, useCallback, useState } from "react"
import { Grid } from "@material-ui/core"
import { Alert } from "reactstrap"
import Input from "./Input"
import { FixedSizeList as List } from "react-window"

const LazyElement = lazy(() => import("common/components/Element"))

const Palindrome = () => {
  const [characters, setCharacters] = useState([])
  const [alert, setAlert] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const updateCharacters = (start, end, delay) => {
    setTimeout(() => {
      setCharacters((prevCharacters) => {
        return prevCharacters.map(({ char, highlight }, idx) => {
          if (idx === start || idx === end) {
            return {
              char,
              highlight: true,
            }
          }
          return {
            char,
            highlight,
          }
        })
      })
    }, delay)
  }

  const checkPalindrome = useCallback((input) => {
    let start = 0,
      end = input.length - 1,
      isPalin = true,
      delay = 1000

    setCharacters(
      input.split("").map((char) => ({
        char,
        highlight: false,
      }))
    )
    setDisabled(true)
    while (start <= end) {
      if (input[start] !== input[end]) {
        setAlert({
          type: "danger",
          text: "Input string is not a Palindrome",
        })
        setDisabled(false)
        isPalin = false
        break
      } else {
        updateCharacters(start, end, delay)
        delay = delay * 1.2
        start++
        end--
      }
    }
    if (isPalin) {
      setAlert({
        type: "success",
        text: "Input string is a Palindrome",
      })
      setDisabled(false)
    }
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
          <Input checkPalindrome={checkPalindrome} disabled={disabled} />
        </Grid>
      </Grid>

      <Grid container className="mt-4 mb-4 text-center">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyList characters={characters} />
        </Suspense>
      </Grid>
    </Grid>
  )
}

const LazyList = ({ characters }) => {
  return (
    <List
      height={120}
      itemCount={characters.length}
      itemSize={200}
      width={window.innerWidth || 800}
      direction="horizontal"
    >
      {({ index, style }) => (
        <Grid item xs={12} style={style}>
          <LazyElement
            highlight={characters[index].highlight}
            data={{ value: characters[index].char, index }}
            type="array"
          />
        </Grid>
      )}
    </List>
  )
}

export default Palindrome
