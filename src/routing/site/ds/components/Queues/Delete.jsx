import React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"

//styling the form and component
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 3,
  },
  bullet: {
    display: "inline-block",
    margin: "0 8px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 175,
    marginTop: 33,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}))

export default function Delete(props) {
  ///--------- Select the start or end input type ------------
  const classes = useStyles()
  let where = "start"

  //-----------------------------------------------------------------

  if (props.open)
    return (
      <Card
        className={classes.root}
        style={{ border: "1px solid rgba(22,45,167,0.9)" }}
      >
        <CardContent className="bg-primary text-white ">
          <Typography variant="h5" component="h2">
            {" "}
            Delete
          </Typography>
        </CardContent>

        <CardActions>
          <FormControl variant="outlined" className={classes.formControl}>
            <Button
              className="mt-2"
              onClick={() => {
                props.del(where) // calling the del function of the LinkList compoent
              }}
              variant="outlined"
              color="primary"
            >
              DELETE
            </Button>
          </FormControl>
        </CardActions>
      </Card>
    )
  else return <div></div>
}
