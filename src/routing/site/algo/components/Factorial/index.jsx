import React from "react"
import Element from "../../../../../common/components/Element"
import { FaEquals, FaTimes } from "react-icons/fa"
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@material-ui/core"
import { Alert } from "reactstrap"

class Inp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: null,
    }
  }
  render() {
    return (
      <Card>
        <CardHeader
          title={"Factorial Of Number"}
          titleTypographyProps={{
            variant: "h5",
            color: "primary",
          }}
          subheader="Finds the product 1 x 2 x 3 x .... upto a number N"
          subheaderTypographyProps={{
            variant: "subtitle1",
            color: "secondary",
          }}
        ></CardHeader>
        <CardContent
          style={{ display: "flex", flexDirection: "column" }}
          className="text-center"
        >
          <TextField
            disabled={this.props.parent.state.disabled}
            type="number"
            label="Factorial Of Number"
            onChange={(event) => {
              this.setState({ input: event.target.value })
            }}
            value={this.state.input ?? ""}
          />
          <br />
          <Button
            style={{
              marginTop: 12,
              backgroundColor: "#403d4a",
              color: "white",
            }}
            type="submit"
            disabled={this.props.parent.state.disabled}
            onClick={() => {
              this.props.parent.fact(parseInt(this.state.input))
              this.setState({ input: null })
              this.props.parent.setState({ result: null })
            }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    )
  }
}

export default class Factorial extends React.Component {
  state = {
    input: null,
    result: null,
    processed: null,
    rest: null,
    disabled: false,
  }

  fact(input) {
    if (input >= 0 && input <= 50) {
      this.setState(
        (prevState) => {
          if (prevState.input === null) {
            return {
              disabled: true,
              input,
              processed: `${input}`,
              rest: input >= 2 ? input - 1 : 1,
              alert: null,
            }
          }
          if (!prevState.processed.includes("X")) {
            return {
              processed: `${prevState.processed} X ${prevState.rest}`,
              rest: prevState.rest >= 2 ? prevState.rest - 1 : 1,
            }
          } else {
            let processed = prevState.processed.split(" X ")
            processed = parseFloat(processed[0]) * parseFloat(processed[1])

            if (prevState.rest === 1) {
              return {
                result: `${processed}`,
                input: null,
                disabled: false,
                alert: {
                  text: "Factorial successfully computed",
                  type: "success",
                },
              }
            } else {
              return {
                processed: `${processed}`,
              }
            }
          }
        },
        () => {
          if (this.state.result === null) {
            setTimeout(() => {
              this.fact(this.state.rest)
            }, 0.5 * 1000)
          }
        }
      )
    } else {
      this.setState({
        alert: {
          text: "Factorial does not exist or too large",
          type: "danger",
        },
      })
    }
  }

  render() {
    return (
      <Grid container>
        {this.state.alert && (
          <Grid item sm={12}>
            <Alert
              color={this.state.alert.type}
              isOpen={!!this.state.alert.text}
              toggle={() => {
                this.setState({ alert: null })
              }}
            >
              {this.state.alert.text}
            </Alert>
          </Grid>
        )}
        <Grid container className="text-center">
          <Grid item sm={12}>
            <Inp parent={this} />
          </Grid>
        </Grid>

        {parseInt(this.state.input) >= 0 && (
          <Grid container className="text-center mt-4 mb-4">
            <Grid item sm={2}>
              <Element
                highlight={true}
                data={{ value: `${this.state.input}!` }}
                type="Array"
              />
            </Grid>
            <Grid item sm={2}>
              <FaEquals style={{ margin: "auto 5px" }} />
            </Grid>
            <Grid item sm={3}>
              <Element data={{ value: this.state.processed }} type="Array" />
            </Grid>
            <Grid item sm={2}>
              <FaTimes style={{ margin: "auto 5px" }} />
            </Grid>
            <Grid item sm={3}>
              <Element data={{ value: `${this.state.rest}!` }} type="Array" />
            </Grid>
          </Grid>
        )}
        {this.state.result && (
          <Grid container className="text-center mt-4 mb-4">
            <Grid item xs={12}>
              <Element
                highlight={true}
                data={{ value: `${this.state.result}` }}
                type="Array"
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    )
  }
}
