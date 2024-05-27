import React from "react"
import Element from "common/components/Element"
import Grid from "@material-ui/core/Grid"
import Slide from "@material-ui/core/Slide"
import { FaEquals, FaTimes } from "react-icons/fa"
import Input from "routing/site/algo/components/Exponentiation/Input"

export default class Exponent extends React.Component {
  constructor(props) {
    super(props)
    this.expo = this.expo.bind(this)
    this.state = {
      result: [],
      base: null,
      power: null,
      disabled: false,
      ans: null,
    }
  }

  power(power) {
    if (power > 0)
      this.setState(
        (prevState) => {
          let ans,
            result = [...prevState.result],
            disabled,
            p
          for (p = 0; p < power - 1; p += 2) {
            result[p / 2] = result[p] * result[p + 1]
          }
          if (power % 2 === 1) {
            result[p / 2] = result[power - 1]
          }
          if (result.length === 1) {
            ans = result[0]
            result.length = 0
            disabled = false
          } else {
            disabled = true
            result.length = Math.ceil(power / 2)
          }
          return { result, disabled, ans }
        },
        () => {
          setTimeout(() => {
            this.power(!this.state.ans ? Math.ceil(power / 2) : 0)
          }, 1200)
        }
      )
  }

  expo(base, power) {
    let result = [...this.state.result]
    for (let p = 0; p < power; p++) {
      result.push(base)
    }
    this.setState(
      {
        result,
        base,
        power,
        disabled: true,
      },
      () => {
        setTimeout(() => {
          this.power(power)
        }, 500)
      }
    )
  }

  render() {
    return (
      <Grid container>
        <Slide
          direction="right"
          in={!this.state.disabled}
          mountOnEnter
          unmountOnExit
        >
          <Grid item xs={12} sm={6} className="text-center m-4">
            <Input disabled={this.state.disabled} expo={this.expo} />
          </Grid>
        </Slide>
        <Slide
          direction="left"
          in={this.state.disabled || this.state.ans}
          mountOnEnter
          unmountOnExit
        >
          <Grid
            item
            xs={12}
            sm={this.state.disabled ? 12 : 4}
            className="text-center m-4"
          >
            {this.state.base && this.state.power && (
              <React.Fragment>
                <Element
                  highlight={true}
                  data={{ value: `${this.state.base} ^ ${this.state.power}` }}
                  type="array"
                />
                <FaEquals style={{ margin: "auto 5px" }} />
              </React.Fragment>
            )}
            {this.state.result.length >= 1 &&
              this.state.disabled &&
              this.state.result.map((value, index, result) => {
                if (index > 0) {
                  return (
                    <React.Fragment key={`res_mul_val_${index}`}>
                      <FaTimes style={{ margin: "auto 5px" }} />
                      <Element data={{ value }} type="array" />
                    </React.Fragment>
                  )
                } else {
                  let highlight
                  if (result.length === 1) {
                    highlight = true
                  } else {
                    highlight = false
                  }
                  return (
                    <Element
                      key="first_val"
                      highlight={highlight}
                      data={{ value }}
                      type="array"
                    />
                  )
                }
              })}
            {!this.state.disabled && this.state.ans && (
              <Element
                key="result"
                highlight={true}
                data={{ value: this.state.ans }}
                type="array"
              />
            )}
          </Grid>
        </Slide>
      </Grid>
    )
  }
}
