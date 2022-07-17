import React from "react";
import Element from "../../../../../common/components/Element";
import { Button, Card, CardContent, CardHeader, Grid, TextField } from "@material-ui/core";
import { Alert } from "reactstrap";

class Range extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: null,
      end: null,
    };
  }
  render() {
    return (
      <Card>
        <CardHeader
          title={"Primes in Range"}
          titleTypographyProps={{
            variant: "h5",
            color: "primary",
          }}
          subheader="Find primes from start to end number in range"
          subheaderTypographyProps={{
            variant: "subtitle1",
            color: "secondary",
          }}
        />
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            type="number"
            label="Start of Range"
            color="secondary"
            onChange={(event) => {
              this.setState({ start: event.target.value });
            }}
            value={this.state.start ?? ""}
          />
          <TextField
            type="number"
            label="End of Range"
            color="secondary"
            className="mt-2"
            onChange={(event) => {
              this.setState({ end: event.target.value });
            }}
            value={this.state.end ?? ""}
          />
          <Button
            style={{ marginTop: 12, backgroundColor: "#403d4a", color: "white" }}
            type="submit"
            onClick={() => {
              this.props.parent.sieve(
                parseInt(this.state.start),
                parseInt(this.state.end)
              );
              this.setState({ start: null, end: null });
            }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default class Sieve extends React.Component {
  state = {
    numbers: [],
  };

  init(start, end) {
    let numbers = [],
      primes = new Set(),
      nonPrimes = new Set();
    for (let num = start; num <= end; num++) {
      if (num >= 2) numbers.push({ value: num, prime: true });
      else numbers.push({ value: num, prime: false });
    }
    for (let p = 2; p * p <= end; p++) {
      if (!nonPrimes.has(p)) {
        primes.add(p);
        for (let x = 2 * p; x <= end; x += p) {
          nonPrimes.add(x);
        }
      }
    }
    return { numbers, primes };
  }

  sieve(start, end) {
    if (start && end && start >= 1 && start <= end) {
      if (end - start >= 1000 || end > 100000000) {
        this.setState({
          alert:
            { text: "Too big range not supported yet", type: "danger" }
        });
        return;
      }
      let { numbers, primes } = this.init(start, end);
      for (const prime of primes) {
        let s = start % prime;
        if (s) {
          s = prime - s;
        }
        if (prime !== numbers[s].value) {
          numbers[s].prime = false;
        }

        for (s = s + prime; s <= end - start; s += prime) {
          numbers[s].prime = false;
        }
      }
      this.setState({
        numbers, alert:
          { text: "The prime ones are highlighted in green", type: "success" }
      });
    } else {
      this.setState({
        alert:
          { text: "Invalid Range or No primes in Range", type: "danger" }
      });
    }
  }

  render() {
    return (
      <>
        {this.state.alert && (<Alert
          color={this.state.alert.type}
          isOpen={!!this.state.alert.text}
          toggle={() => {
            this.setState({ alert: null });
          }}
        >
          {this.state.alert.text}
        </Alert>)}
        <Grid container>
          <Grid container className="text-center">
            <Grid item xs={12}>
              <Range parent={this} />
            </Grid>
          </Grid>
          <Grid container className="mt-4 mb-4 text-center">
            {this.state.numbers.map((data, index) => {
              let highlight = data.prime || false,
                value = data.value;
              return (
                <Grid
                  item xs={3}
                  key={value + "-" + index}
                >
                  <Element
                    highlight={highlight}
                    data={{ value, index }}
                    type="array"
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </>

    );
  }
}
