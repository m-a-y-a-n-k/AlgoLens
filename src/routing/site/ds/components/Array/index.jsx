import React from "react"
import Element from "common/components/Element"
import {
  InputGroup,
  Input,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupAddon,
  InputGroupText,
  Alert,
} from "reactstrap"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from "@material-ui/core"

class Insert extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.insert = this.insert.bind(this)
    this.state = {
      dropdownOpen: false,
      data: null,
      where: "Start",
      alert: null,
    }
  }

  toggleDropDown() {
    let dropdownOpen = this.state.dropdownOpen
    this.setState({
      dropdownOpen: !dropdownOpen,
    })
  }

  insert(data, where) {
    if (data) {
      let arr = this.props.array
      switch (where.toLowerCase()) {
        case "start":
          arr.splice(0, 0, data)
          break
        case "end":
        default:
          arr.splice(arr.length, 0, data)
      }
      this.setState({
        alert: { text: "Inserted successfully", type: "success", alertId: 1 },
      })
      this.props.updateState({ array: arr, highlights: [] })
    } else {
      this.setState({
        alert: { text: "Submission is empty", type: "danger", alertId: 1 },
      })
    }
  }

  render() {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Insert Element
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: "column" }}>
          {this.state.alert && this.state.alert.alertId === this.props.alertId && (
            <Alert
              color={this.state.alert.type}
              isOpen={!!this.state.alert.text}
              toggle={() => {
                this.setState({ alert: null })
              }}
            >
              {this.state.alert.text}
            </Alert>
          )}
          <InputGroup>
            <Input
              onChange={(event) => {
                this.setState({ data: event.target.value })
              }}
              value={this.state.data ?? ""}
            />
            <InputGroupButtonDropdown
              addonType="append"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropDown}
            >
              <DropdownToggle caret>{this.state.where}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    this.setState({ where: "Start" })
                  }}
                >
                  Start
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => {
                    this.setState({ where: "End" })
                  }}
                >
                  End
                </DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
          <Button
            className="mt-4"
            style={{ backgroundColor: "#403d4a", color: "white" }}
            onClick={() => {
              this.insert(this.state.data, this.state.where)
              this.setState({ data: null })
            }}
          >
            Submit
          </Button>
        </AccordionDetails>
      </Accordion>
    )
  }
}

class Delete extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.delete = this.delete.bind(this)
    this.state = {
      dropdownOpen: false,
      data: null,
      where: 0,
      alert: null,
    }
    this.posOptions = ["Select", "Start", "End"]
  }

  toggleDropDown() {
    let dropdownOpen = this.state.dropdownOpen
    this.setState({
      dropdownOpen: !dropdownOpen,
    })
  }

  delete(data, where) {
    let arr = this.props.array
    let exists = arr.length > 0,
      present
    if (data) {
      present = exists = exists && !!arr.find((value) => value === data)
      arr = arr.filter((value) => {
        return value !== data
      })
    } else {
      switch (where.toLowerCase()) {
        case "start":
          arr.splice(0, 1)
          break
        case "end":
          arr.splice(arr.length - 1, 1)
          break
        default:
          present = exists = false
      }
    }
    this.setState({
      alert: {
        text: present
          ? "Deleted Successfully"
          : exists
          ? "Value not present"
          : "Delete operation is invalid",
        type: present ? "success" : exists ? "warning" : "danger",
        alertId: 2,
      },
    })
    this.props.updateState({
      array: arr,
      highlights: [],
    })
  }

  render() {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Delete Element (Position or Value)
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: "column" }}>
          {this.state.alert && this.state.alert.alertId === this.props.alertId && (
            <Alert
              color={this.state.alert.type}
              isOpen={!!this.state.alert.text}
              toggle={() => {
                this.setState({ alert: null })
              }}
            >
              {this.state.alert.text}
            </Alert>
          )}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Position</InputGroupText>
            </InputGroupAddon>
            <InputGroupButtonDropdown
              addonType="append"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropDown}
            >
              <DropdownToggle caret>
                {this.posOptions[this.state.where]}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    this.setState({ where: 0 })
                  }}
                >
                  Select
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => {
                    this.setState({ where: 1, data: "" })
                  }}
                >
                  Start
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => {
                    this.setState({ where: 2, data: "" })
                  }}
                >
                  End
                </DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
          <span className="m-2">Or</span>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value, where: 0 })
              }}
              disabled={!!this.state.where}
              value={this.state.data ?? ""}
            />
          </InputGroup>
          <Button
            className="mt-4"
            style={{ backgroundColor: "#403d4a", color: "white" }}
            onClick={() => {
              this.delete(this.state.data, this.posOptions[this.state.where])
              this.setState({ data: null })
            }}
          >
            Submit
          </Button>
        </AccordionDetails>
      </Accordion>
    )
  }
}

class Update extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.update = this.update.bind(this)
    this.state = {
      dropdownOpen: false,
      data: null,
      position: null,
      alert: null,
    }
  }

  toggleDropDown() {
    let dropdownOpen = this.state.dropdownOpen
    this.setState({
      dropdownOpen: !dropdownOpen,
    })
  }

  update(position, value) {
    if (
      position &&
      value &&
      parseInt(position) <= this.props.array.length - 1 &&
      parseInt(position) >= 0
    ) {
      let arr = this.props.array,
        highlights = []
      arr[position] = value
      highlights.push(parseInt(position))
      this.setState({
        alert: {
          text: "Successfully updated check highlighted element",
          type: "success",
          alertId: 3,
        },
      })
      this.props.updateState({
        array: arr,
        highlights,
      })
    } else {
      this.setState({
        alert: { text: "Invalid update operation", type: "danger", alertId: 3 },
      })
    }
  }

  render() {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Update Element (Value at Position)
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: "column" }}>
          {this.state.alert && this.state.alert.alertId === this.props.alertId && (
            <Alert
              color={this.state.alert.type}
              isOpen={!!this.state.alert.text}
              toggle={() => {
                this.setState({ alert: null })
              }}
            >
              {this.state.alert.text}
            </Alert>
          )}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Position</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              placeholder="Position"
              onChange={(event) => {
                this.setState({ position: event.target.value })
              }}
              value={this.state.position ?? ""}
            />
          </InputGroup>
          <InputGroup className="mt-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value })
              }}
              value={this.state.data ?? ""}
            />
          </InputGroup>
          <Button
            className="mt-4"
            style={{ backgroundColor: "#403d4a", color: "white" }}
            onClick={() => {
              this.update(this.state.position, this.state.data)
              this.setState({ position: null, data: null })
            }}
          >
            Submit
          </Button>
        </AccordionDetails>
      </Accordion>
    )
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.state = {
      dropdownOpen: false,
      data: null,
    }
  }

  toggleDropDown() {
    let dropdownOpen = this.state.dropdownOpen
    this.setState({
      dropdownOpen: !dropdownOpen,
    })
  }

  search(data) {
    if (data) {
      let arr = this.props.array,
        highlights = []
      arr.forEach((value, index) => {
        if (value === data) {
          highlights.push(parseInt(index))
        }
      })
      const foundMatches = highlights.length > 0
      this.setState({
        alert: {
          text: foundMatches
            ? "Searched values are highlighted"
            : "No matches found",
          type: "success",
          alertId: 4,
        },
      })
      this.props.updateState({
        highlights,
      })
    } else {
      this.setState({
        alert: { text: "Empty Search", type: "danger", alertId: 4 },
      })
    }
  }

  render() {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Search Element (Value at Position)
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: "column" }}>
          {this.state.alert && this.state.alert.alertId === this.props.alertId && (
            <Alert
              color={this.state.alert.type}
              isOpen={!!this.state.alert.text}
              toggle={() => {
                this.setState({ alert: null })
              }}
            >
              {this.state.alert.text}
            </Alert>
          )}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value })
              }}
              value={this.state.data ?? ""}
            />
          </InputGroup>
          <Button
            className="mt-4"
            style={{ backgroundColor: "#403d4a", color: "white" }}
            onClick={() => {
              this.search(this.state.data)
              this.setState({ data: null })
            }}
          >
            Submit
          </Button>
        </AccordionDetails>
      </Accordion>
    )
  }
}

export default class Array extends React.Component {
  constructor(props) {
    super(props)

    this.updateState = this.updateState.bind(this)
    this.state = {
      array: [],
      highlights: [],
    }
  }

  updateState(state) {
    this.setState(state)
  }

  render() {
    return (
      <Grid container>
        <Grid container>
          <Grid item sm={12} className="mt-2">
            <Insert
              array={this.state.array}
              updateState={this.updateState}
              alertId={1}
            />
          </Grid>
          <Grid item sm={12} className="mt-2">
            <Delete
              array={this.state.array}
              updateState={this.updateState}
              alertId={2}
            />
          </Grid>
          <Grid item sm={12} className="mt-2">
            <Update
              array={this.state.array}
              updateState={this.updateState}
              alertId={3}
            />
          </Grid>
          <Grid item sm={12} className="mt-2">
            <Search
              array={this.state.array}
              updateState={this.updateState}
              alertId={4}
            />
          </Grid>
        </Grid>
        <Grid container className="mt-4 mb-4">
          {this.state.array.map((value, index) => {
            let highlight = false
            if (this.state.highlights.includes(index)) {
              highlight = true
            }
            return (
              <Grid item sm={3} key={`${value}-${index}`}>
                <Element
                  highlight={highlight}
                  data={{ value, index }}
                  type="array"
                />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    )
  }
}
