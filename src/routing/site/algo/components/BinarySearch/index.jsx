import React from "react"
import Element from "common/components/Element"
import Grid from "@material-ui/core/Grid"
import Insert from "routing/site/algo/components/BinarySearch/Insert"
import Update from "routing/site/algo/components/BinarySearch/Update"
import Delete from "routing/site/algo/components/BinarySearch/Delete"
import Search from "routing/site/algo/components/BinarySearch/Search"

export default class BinarySearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      array: [],
      highlights: [],
      iter: 0,
    }
  }

  insert(data) {
    if (data) {
      const value = parseFloat(data)
      let arr = this.state.array,
        i
      for (i = 0; i < arr.length; i++) {
        if (arr[i] >= value) {
          break
        }
      }
      arr.splice(i, 0, value)
      this.setState({ array: arr, highlights: [], iter: 0, alert: null })
      return i
    }
    this.setState({
      alert: { text: "Submission is empty", type: "danger", alertId: 1 },
    })
    return null
  }

  delete(data, position) {
    let arr = this.state.array
    if (data) {
      const num = parseFloat(data)
      let length = arr.length
      arr = arr.filter((value) => {
        return value !== num
      })
      if (!arr || arr.length === 0) arr = []
      if (length !== arr.length)
        this.setState({ array: arr, highlights: [], alert: null })
      else
        this.setState({
          alert: {
            text: "Data not found to delete",
            type: "danger",
            alertId: 2,
          },
        })
    } else if (position >= 0 && position < arr.length) {
      arr = this.state.array
      arr.splice(position, 1)
      this.setState({ array: arr, highlights: [], iter: 0, alert: null })
    } else {
      this.setState({
        alert: { text: "Unable to delete", type: "danger", alertId: 2 },
      })
    }
  }

  update(position, data) {
    if (data && position < this.state.array.length && position >= 0) {
      let highlights = []
      this.delete(null, position)
      position = this.insert(data)
      highlights.push(position)
      this.setState({ highlights, iter: 0, alert: null })
    } else {
      this.setState({
        alert: {
          text: "Data or position not found to update",
          type: "danger",
          alertId: 3,
        },
      })
    }
  }

  bs(data, start, end, arr) {
    let mid = Math.floor((start + end) / 2)
    if (start > end) return
    if (arr[mid] === data) {
      this.setState((prevState) => {
        let highlights = prevState.highlights
        while (start <= end && arr[start] !== data) {
          start++
          highlights.shift()
        }
        while (end >= start && arr[end] !== data) {
          end--
          highlights.pop()
        }
        return { highlights, iter: prevState.iter + 1 }
      })
    } else if (arr[mid] < data) {
      this.setState(
        (prevState) => {
          let highlights = prevState.highlights
          while (start <= mid) {
            highlights.shift()
            start++
          }
          return { highlights, iter: prevState.iter + 1 }
        },
        () => {
          setTimeout(() => {
            this.bs(data, start, end, arr)
          }, 0.75 * 1000)
        }
      )
    } else {
      this.setState(
        (prevState) => {
          let highlights = prevState.highlights
          while (end >= mid) {
            highlights.pop()
            end--
          }
          return { highlights, iter: prevState.iter + 1 }
        },
        () => {
          setTimeout(() => {
            this.bs(data, start, end, arr)
          }, 0.75 * 1000)
        }
      )
    }
    return
  }

  search(data) {
    if (data && this.state.array.length > 0) {
      const value = parseFloat(data)
      this.setState(
        (prevState) => {
          let highlights = [],
            start = 0,
            end = prevState.array.length - 1
          while (start <= end) {
            highlights.push(start)
            start++
          }
          return { highlights, iter: 0 }
        },
        () => {
          setTimeout(() => {
            this.bs(value, 0, this.state.array.length - 1, this.state.array)
          }, 0.75 * 1000)
        }
      )
    } else {
      this.setState({
        alert: { text: "Empty Search", type: "danger", alertId: 4 },
      })
    }
  }

  render() {
    return (
      <Grid container>
        <Grid container>
          <Grid item xs={12} className="mt-2">
            <Insert parent={this} alertId={1} />
          </Grid>
          <Grid item xs={12} className="mt-2">
            <Delete parent={this} alertId={2} />
          </Grid>
          <Grid item xs={12} className="mt-2">
            <Update parent={this} alertId={3} />
          </Grid>
          <Grid item xs={12} className="mt-2">
            <Search parent={this} alertId={4} />
          </Grid>
        </Grid>
        <Grid container className="mt-4 mb-4">
          {this.state.array.map((value, index) => {
            let highlight = false
            if (this.state.highlights.includes(index)) {
              highlight = true
            }
            return (
              <Grid item xs={3} key={`${value}-${index}`}>
                <Element
                  highlight={highlight}
                  data={{ value, index }}
                  type="array"
                />
              </Grid>
            )
          })}
        </Grid>
        <Grid item xs={12} className="mt-4 mb-4">
          Steps : {this.state.iter}
        </Grid>
      </Grid>
    )
  }
}
