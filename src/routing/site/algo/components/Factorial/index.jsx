import React from "react"
import Element from "common/components/Element"
import { FaEquals, FaTimes } from "react-icons/fa"
import { Grid } from "@material-ui/core"
import { Alert } from "reactstrap"
import Input from "routing/site/algo/components/Factorial/Input"

export default class Factorial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: null,
      result: null,
      processed: null,
      rest: null,
      disabled: false,
    }
    this.setResult = this.setResult.bind(this)
    this.fact = this.fact.bind(this)
  }

  setResult(result) {
    this.setState({
      result,
    })
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Input
              fact={this.fact}
              setResult={this.setResult}
              disabled={this.state.disabled}
            />
          </Grid>
        </Grid>

        {parseInt(this.state.input) >= 0 && (
          <Grid container className="text-center mt-4 mb-4">
            <Grid item xs={2}>
              <Element
                highlight={true}
                data={{ value: `${this.state.input}!` }}
                type="Array"
              />
            </Grid>
            <Grid item xs={2}>
              <FaEquals style={{ margin: "auto 5px" }} />
            </Grid>
            <Grid item xs={3}>
              <Element data={{ value: this.state.processed }} type="Array" />
            </Grid>
            <Grid item xs={2}>
              <FaTimes style={{ margin: "auto 5px" }} />
            </Grid>
            <Grid item xs={3}>
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
