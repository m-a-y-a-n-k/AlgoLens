import React, { useState } from "react"
import { makeStyles, fade } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { FormControl } from "@material-ui/core"

//Card component styling
const useStyles = makeStyles({
  root: {
    minWidth: 180,
  },
})

//text input field styling
const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}))
function RedditTextField(props) {
  const classes = useStylesReddit()

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  )
}

const formStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
  },
}))

const textStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}))

const buttonStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}))

const Input = React.memo(({ disabled, setData }) => {
  const [input, setInput] = useState(null)
  const classes = useStyles()
  const inputStyle = textStyles()
  const buttonStyle = buttonStyles()
  const formStyle = formStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <h2 className="bg-success text-white p-2">
        Compute factors of a whole number N = p x q x r ..... x z
      </h2>
      <h4 className="text-primary p-2">
        Finds numbers between 1 to N that completely divides N leaving remainder
        0
      </h4>
      <CardActions>
        <FormControl className={`pb-3 pr-0 pl-2 pt-1 ${formStyle.root}`}>
          <RedditTextField
            label="Number"
            className={inputStyle.root}
            variant="filled"
            id="reddit-input-base"
            onChange={(event) => {
              setInput(event.target.value)
            }}
            value={input ? input : ""}
            disabled={disabled}
          />
          <Button
            className={buttonStyle.root}
            disabled={disabled}
            onClick={() => {
              setData(Number(input))
              setInput(null)
            }}
            variant="contained"
            color="primary"
            size="small"
          >
            Submit
          </Button>
        </FormControl>
      </CardActions>
    </Card>
  )
})

Input.displayName = "Factorial.Input"

export default Input
