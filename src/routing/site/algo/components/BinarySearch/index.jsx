import React, { lazy, useState, Suspense } from "react"
import Grid from "@material-ui/core/Grid"
import Insert from "routing/site/algo/components/BinarySearch/Insert"
import Update from "routing/site/algo/components/BinarySearch/Update"
import Delete from "routing/site/algo/components/BinarySearch/Delete"
import Search from "routing/site/algo/components/BinarySearch/Search"
import { FixedSizeList as List } from "react-window"

const LazyElement = lazy(() => import("common/components/Element"))

const BinarySearch = () => {
  const [array, setArray] = useState([])
  const [highlights, setHighlights] = useState([])
  const [iter, setIter] = useState(0)
  const [alert, setAlert] = useState(null)

  const insert = (data) => {
    if (data) {
      const value = parseFloat(data)
      let arr = array
      let i
      for (i = 0; i < arr.length; i++) {
        if (arr[i] >= value) {
          break
        }
      }
      arr.splice(i, 0, value)
      setArray(arr)
      setHighlights([])
      setIter(0)
      setAlert(null)
      return i
    } else {
      setAlert({ text: "Submission is empty", type: "danger", alertId: 1 })
      return null
    }
  }

  const deleteItem = (data, position) => {
    let arr = array
    if (data) {
      const num = parseFloat(data)
      let length = arr.length
      arr = arr.filter((value) => {
        return value !== num
      })
      if (!arr || arr.length === 0) arr = []
      if (length !== arr.length) {
        setArray(arr)
        setHighlights([])
        setAlert(null)
      } else {
        setAlert({
          text: "Data not found to delete",
          type: "danger",
          alertId: 2,
        })
      }
    } else if (position >= 0 && position < arr.length) {
      arr = array
      arr.splice(position, 1)
      setArray(arr)
      setHighlights([])
      setIter(0)
      setAlert(null)
    } else {
      setAlert({ text: "Unable to delete", type: "danger", alertId: 2 })
    }
  }

  const update = (position, data) => {
    if (data && position < array.length && position >= 0) {
      let newHighlights = []
      deleteItem(null, position)
      position = insert(data)
      newHighlights.push(position)
      setHighlights(newHighlights)
      setIter(0)
      setAlert(null)
    } else {
      setAlert({
        text: "Data or position not found to update",
        type: "danger",
        alertId: 3,
      })
    }
  }

  const bs = (data, start, end, arr) => {
    let mid = Math.floor((start + end) / 2)
    if (start > end) return
    if (arr[mid] === data) {
      setHighlights((oldHighlights) => {
        while (start <= end && arr[start] !== data) {
          start++
          oldHighlights.shift()
        }
        while (end >= start && arr[end] !== data) {
          end--
          oldHighlights.pop()
        }
        return oldHighlights
      })
      setIter((prevIter) => prevIter + 1)
    } else if (arr[mid] < data) {
      setHighlights((oldHighlights) => {
        while (start <= mid) {
          oldHighlights.shift()
          start++
        }
        return oldHighlights
      })
      setIter((prevIter) => prevIter + 1)
      setTimeout(() => {
        bs(data, start, end, arr)
      }, 0.75 * 1000)
    } else {
      setHighlights((oldHighlights) => {
        while (end >= mid) {
          oldHighlights.pop()
          end--
        }
        return oldHighlights
      })
      setIter((prevIter) => prevIter + 1)
      setTimeout(() => {
        bs(data, start, end, arr)
      }, 0.75 * 1000)
    }
  }

  const search = (data) => {
    if (data && array.length > 0) {
      const value = parseFloat(data)
      let newHighlights = []
      let start = 0
      let end = array.length - 1
      while (start <= end) {
        newHighlights.push(start)
        start++
      }
      setHighlights(newHighlights)
      setIter(0)
      setTimeout(() => {
        bs(value, 0, array.length - 1, array)
      }, 0.75 * 1000)
    } else {
      setAlert({ text: "Empty Search", type: "danger", alertId: 4 })
    }
  }

  return (
    <Grid container>
      <Grid container>
        <Grid item xs={12} className="mt-2">
          <Insert parent={{ insert, alert, setAlert }} alertId={1} />
        </Grid>
        <Grid item xs={12} className="mt-2">
          <Delete parent={{ deleteItem, alert, setAlert }} alertId={2} />
        </Grid>
        <Grid item xs={12} className="mt-2">
          <Update parent={{ update, alert, setAlert }} alertId={3} />
        </Grid>
        <Grid item xs={12} className="mt-2">
          <Search parent={{ search, alert, setAlert }} alertId={4} />
        </Grid>
      </Grid>
      <Grid container className="mt-4 mb-4">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyList data={array} highlights={highlights} />
        </Suspense>
      </Grid>
      <Grid item xs={12} className="mt-4 mb-4">
        Steps : {iter}
      </Grid>
    </Grid>
  )
}

const LazyList = ({ data, highlights }) => {
  return (
    <List
      height={80}
      itemCount={data.length}
      itemSize={200}
      width={window.innerWidth || 800}
      direction="horizontal"
    >
      {({ index, style }) => {
        let highlight = false
        if (highlights.includes(index)) {
          highlight = true
        }
        return (
          <Grid item xs={12} style={style}>
            <LazyElement
              highlight={highlight}
              data={{ value: data[index], index }}
              type="array"
            />
          </Grid>
        )
      }}
    </List>
  )
}

export default BinarySearch
