import React, { useState, Fragment } from "react"

import Element from "../../../../../common/components/Element"

import Insert from "./Insert"
import Delete from "./Delete"
import Update from "./Update"
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
  let [head, setHead] = useState(null)
  let [list, setList] = useState(null)
  let [rendered, setRendered] = useState(false)
  let [radioVal, setRadioVal] = useState(false)

  let showoperation = (event) => {
    let operation = event.target.value
    setRadioVal(operation)
  }

  // clear function --------------------------------------------
  let clear = () => {
    let curr = head
    while (curr) {
      curr.highlight = false
      curr = curr.next
    }
    setHead(head)
  }
  // insert--------------------------------------------------------
  let insert = (data, where) => {
    if (data) {
      clear()
      let newNode = { info: data, next: null, highlight: false },
        curr
      if (!head) {
        setHead({ ...newNode })
      } else {
        switch (where.toLowerCase()) {
          case "start":
            newNode.next = head
            setHead({ ...newNode })
            break
          case "end":
          default:
            curr = head
            while (curr.next) {
              curr = curr.next
            }
            curr.next = newNode
            setHead({ ...head })
        }
      }
      setRendered(false)
    } else {
      alert("Empty Insert")
    }
  }
  //----------Using 'del' instead of delete is some keyword
  let del = (data, where, position) => {
    if (head) {
      clear()
      if (data) {
        let head1 = head,
          curr = head1
        while (head1 && head1.info === data) {
          head1 = head1.next
          curr = head1
        }
        while (curr && curr.next) {
          if (curr.next.info === data) {
            curr.next = curr.next.next
          } else {
            curr = curr.next
          }
        }
        setHead(head1)
      } else if (position === parseInt(position)) {
        position = parseInt(position)
        if (position === 0) {
          head = head.next
        } else {
          let curr = head
          while (--position > 0 && curr) {
            curr = curr.next
          }
          if (curr && curr.next) {
            curr.next = curr.next.next
          } else {
            alert("No element to delete")
          }
        }
        setHead(head)
      } else if (where) {
        let curr = head
        switch (where) {
          case "start":
            head = head.next
            break
          case "end":
            if (!head.next) {
              head = null
            } else {
              while (curr && curr.next && curr.next.next) {
                curr = curr.next
              }
              if (curr && curr.next) {
                curr.next = curr.next.next
              }
            }
            break
          default:
        }
        setHead(head)
      } else {
        alert("Invalid Deletion Exception")
      }
      setRendered(false)
    } else {
      alert("List is empty")
    }
  }
  //Update------------------------------------------------------
  let update = (position, value) => {
    if (position && value && parseInt(position) >= 0) {
      clear()
      let head1 = head,
        curr = head
      while (curr && --position >= 0) {
        curr = curr.next
      }
      if (curr) {
        curr.info = value
        curr.highlight = true
        setHead(head1)
        setRendered(false)
      } else {
        alert("Position out of bounds")
      }
    } else {
      alert("Cannot update")
    }
  }

  // Seacrh----------------------------------------------------

  let search = (data) => {
    if (data) {
      clear()
      let head1 = head,
        curr = head
      while (curr) {
        if (curr.info === data) {
          curr.highlight = true
        }
        curr = curr.next
      }
      setHead(head1)
      setRendered(false)
    } else {
      alert("Empty Search")
    }
  }

  let renderList = () => {
    let list = []
    if (head) {
      let curr = head,
        key = 0
      while (curr) {
        if (curr.next) {
          list.push(
            <Fragment key={`${key}-${curr.info}`}>
              <Element
                data={{ value: curr.info }}
                type="LinkedList"
                next={true}
                highlight={curr.highlight}
              />
            </Fragment>
          )
        } else {
          list.push(
            <Fragment key={`${key}-${curr.info}`}>
              <Element
                data={{ value: curr.info }}
                type="LinkedList"
                next={false}
                highlight={curr.highlight}
              />
            </Fragment>
          )
        }
        curr = curr.next
        key++
      }
    }
    setList(list)
    setRendered(true)
  }

  //-----------------content of render function ------------------------------------
  React.useEffect(() => {
    if (!rendered) {
      renderList()
    }
  })

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
                        value="Update"
                        onChange={showoperation}
                        control={<StyledRadio />}
                        label="Update"
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
                insert={(data, where) => {
                  insert(data, where)
                }}
              />
              <Search
                open={radioVal === "Search"}
                search={(data) => {
                  search(data)
                }}
              />
              <Delete
                open={radioVal === "Delete"}
                del={(data, where, position) => {
                  del(data, where, position)
                }}
              />
              <Update
                open={radioVal === "Update"}
                update={(position, value) => {
                  update(position, value)
                }}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid container sm={8}>
          {list}
        </Grid>
      </Grid>
    </div>
  )
}
