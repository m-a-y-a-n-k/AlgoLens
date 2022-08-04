import React, { useState, Fragment } from "react"
import Element from "../../../../../common/components/Element"
import Insert from "./Insert"
import Delete from "./Delete"
import Search from "./Search"
import { Grid } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Paper from "@material-ui/core/Paper"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import SortedSet from "js-sorted-set"

const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
})

function StyledRadio(props) {
  const classes = useStyles()

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  )
}

export default function LinkedList() {
  const gridclass = gridStyle()
  let [radioVal, setRadioVal] = useState(false)
  let [isGreat, setIsGreat] = useState("")
  let [findata, setFindata] = useState(null)
  let [set, setSet] = useState(new SortedSet())
  let showoperation = (event) => {
    let operation = event.target.value
    setRadioVal(operation)
  }

  // clone set
  let cloneSet = (sortedSet) => {
    let clone = new SortedSet()
    if (!sortedSet || sortedSet.length === 0) {
      return clone
    }
    sortedSet.forEach((element) => {
      clone.insert(element)
    })
    return clone
  }

  // insert--------------------------------------------------------

  let insert = (data) => {
    if (data) {
      if (data.length < 7 && isNaN(data) === false) {
        if (set.contains(Number(data))) {
          alert("Already Present")
          return
        }
        console.log(set)
        const mySet = cloneSet(set)
        mySet.insert(Number(data))
        console.log(mySet)
        setSet(mySet)
      } else {
        alert("Invalid input (must contains integers only)")
      }
    } else {
      alert("Enter data")
    }
  }

  //----------Using 'del' instead of delete is some keyword
  let del = (data) => {
    if (data) {
      if (data.length < 6 && isNaN(data) === false) {
        if (set.contains(Number(data))) {
          const mySet = cloneSet(set)
          mySet.remove(Number(data))
          setSet(mySet)
        } else {
          alert("value not exists in the set")
        }
      } else {
        alert("Invalid input (must contains integers only)")
      }
    } else {
      alert("Enter data")
    }
  }
  // search
  let search = (data, where) => {
    if (data) {
      if (data.length < 7 && isNaN(data) === false) {
        if (!set || set.length === 0) {
          alert("set is empty")
          return
        }
        setIsGreat(where)
        setFindata(Number(data))
        switch (where) {
          case "no":
            !set.contains(Number(data)) && alert("Data Not Found")
            break
          case "alls":
            Number(set.beginIterator().value()) > Number(data) &&
              alert("No smaller element present")
            break
          case "allg":
            Number(set.endIterator().previous().value()) < Number(data) &&
              alert("No Greater Element present")
            break
          default:
            break
        }
      } else {
        alert("Invalid input (must contains integers only)")
      }
    } else {
      alert("Enter data")
    }
  }

  // render list
  let renderList = () => {
    const list =
      set &&
      set.length > 0 &&
      set.map((element, key) => {
        return (
          <Fragment key={`${key}-${element}`}>
            <Element
              data={{ value: Number(element) }}
              type="sets"
              next={true}
              highlight={
                isGreat === "no" &&
                findata !== null &&
                Number(element) === Number(findata)
                  ? true
                  : false
              }
              AllGreater={
                isGreat === "allg" && Number(element) > Number(findata)
                  ? true
                  : false
              }
              AllSmaller={
                isGreat === "alls" && Number(element) < Number(findata)
                  ? true
                  : false
              }
            />
          </Fragment>
        )
      })
    return list || []
  }

  //-----------------content of render function ------------------------------------

  return (
    <div className={gridclass.root}>
      <Grid container direction="row" justify="left" alignItems="center">
        <Grid container sm={4}>
          <Paper className={gridclass.paper}>
            <Grid item xs={12} sm={12} spacing={3} alignItems="center">
              <Card>
                <h6 className="bg-primary text-center text-white p-3">
                  Operations
                </h6>
                <CardContent className="pl-0 pr-0 pt-0 text-left">
                  <FormControl className="pl-3" component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup aria-label="gender" name="customized-radios">
                      <FormControlLabel
                        value="Insert"
                        onChange={showoperation}
                        control={<StyledRadio />}
                        label="Insert"
                      />
                      <FormControlLabel
                        value="Delete"
                        onChange={showoperation}
                        control={<StyledRadio />}
                        label="Delete"
                      />

                      <FormControlLabel
                        value="Search"
                        onChange={showoperation}
                        control={<StyledRadio />}
                        label="Search"
                      />
                    </RadioGroup>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
            <Grid className="mt-3" item spacing={4} xs={12} sm={12}>
              <Insert
                open={radioVal === "Insert"}
                insert={(data) => {
                  insert(data)
                }}
              />
              <Search
                open={radioVal === "Search"}
                search={(data, where) => {
                  search(data, where)
                }}
              />
              <Delete
                open={radioVal === "Delete"}
                del={(data) => {
                  del(data)
                }}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid
          container
          style={{
            border: set.length > 0 ? "2px solid black" : "",
            height: "auto",
          }}
          sm={8}
        >
          {renderList()}
        </Grid>
      </Grid>
    </div>
  )
}
