import {
  Button,
  Card,
  CardActions,
  CardHeader,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core"
import React, { useEffect, useRef, useState } from "react"

//Card component styling
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

// button styling ---------------------------------------------------
const styleforbutton = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
}))

// ------- Dropdown styling

const stylefordropdown = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
}))

const Run = (props) => {
  const classes = useStyles()
  const inputLabel = useRef([])
  const [speed, setSpeed] = useState("Slow")
  const buttonstyle = styleforbutton()
  const dropdownstyle = stylefordropdown()
  const [labelWidth, setLabelWidth] = React.useState(0)

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const selectSpeed = (event) => {
    setSpeed(event.target.value)
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={"Closest Pair of Points"}
        titleTypographyProps={{
          variant: "h5",
          color: "primary",
        }}
        subheader="Pair connected by red dash lines"
        subheaderTypographyProps={{
          variant: "subtitle1",
          color: "secondary",
        }}
      />
      <CardActions>
        <FormControl className={dropdownstyle.formControl}>
          <InputLabel
            ref={inputLabel}
            id="run-speed-label"
            labelwidth={labelWidth}
          >
            Speed
          </InputLabel>
          <Select
            labelId="run-speed-label"
            id="speed-select-outlined"
            value={speed}
            onChange={selectSpeed}
          >
            <MenuItem value="Slow">Slow</MenuItem>
            <MenuItem value="Fast">Fast</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={buttonstyle.root} noValidate>
          <Button
            style={{ backgroundColor: "#403d4a", color: "white" }}
            onClick={() => {
              props.find(speed)
            }}
          >
            Run
          </Button>
        </FormControl>
      </CardActions>
    </Card>
  )
}

export default Run
