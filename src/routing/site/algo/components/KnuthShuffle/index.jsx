import React from "react"
import Element from "common/components/Element"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  InputGroup,
  Input,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap"

class Insert extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.state = {
      dropdownOpen: false,
      data: null,
      where: "Start",
    }
  }

  toggleDropDown() {
    let dropdownOpen = this.state.dropdownOpen
    this.setState({
      dropdownOpen: !dropdownOpen,
    })
  }

  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Insert</CardHeader>
        <CardBody className="text-center">
          <CardTitle>Enter data</CardTitle>
          <br />
          <InputGroup>
            <Input
              disabled={this.props.parent.state.disabled}
              onChange={(event) => {
                this.setState({ data: event.target.value })
              }}
              value={this.state.data ? this.state.data : ""}
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
                  {" "}
                  End
                </DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
          <br />
          <Button
            disabled={this.props.parent.state.disabled}
            onClick={() => {
              this.props.parent.insert(this.state.data, this.state.where)
              this.setState({ data: null })
            }}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    )
  }
}

class Delete extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      position: null,
    }
  }

  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Delete</CardHeader>
        <CardBody className="text-center">
          <CardTitle>Position or Value</CardTitle>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Position</InputGroupText>
            </InputGroupAddon>
            <Input
              disabled={this.props.parent.state.disabled}
              placeholder="Position"
              onChange={(event) => {
                this.setState({ position: event.target.value, data: null })
              }}
              value={this.state.position ? this.state.position : ""}
            />
          </InputGroup>
          <br />
          <span>Or</span>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              disabled={this.props.parent.state.disabled}
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value, position: null })
              }}
              value={this.state.data ? this.state.data : ""}
            />
          </InputGroup>
          <br />
          <Button
            disabled={this.props.parent.state.disabled}
            onClick={() => {
              this.props.parent.delete(this.state.data, this.state.position)
              this.setState({ data: null, position: null })
            }}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    )
  }
}

class Update extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.state = {
      dropdownOpen: false,
      data: null,
      position: null,
    }
  }

  toggleDropDown() {
    let dropdownOpen = this.state.dropdownOpen
    this.setState({
      dropdownOpen: !dropdownOpen,
    })
  }

  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Update</CardHeader>
        <CardBody className="text-center">
          <CardTitle>Value at Position</CardTitle>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Position</InputGroupText>
            </InputGroupAddon>
            <Input
              disabled={this.props.parent.state.disabled}
              type="number"
              placeholder="Position"
              onChange={(event) => {
                this.setState({ position: event.target.value })
              }}
              value={this.state.position ? this.state.position : ""}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              disabled={this.props.parent.state.disabled}
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value })
              }}
              value={this.state.data ? this.state.data : ""}
            />
          </InputGroup>
          <br />
          <Button
            disabled={this.props.parent.state.disabled}
            onClick={() => {
              this.props.parent.update(this.state.position, this.state.data)
              this.setState({ position: null, data: null })
            }}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    )
  }
}

class Shuffle extends React.Component {
  state = {
    shuffle: false,
  }

  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Knuths Shuffle</CardHeader>
        <CardBody className="text-center">
          <CardTitle>
            Shuffle (or Unshuffle) Array Randomly and Uniformly
          </CardTitle>
          <br />
          <Button
            disabled={this.props.parent.state.disabled}
            onClick={() => {
              this.props.parent.shuffle()
              this.setState({ shuffle: true })
            }}
          >
            Shuffle
          </Button>
          {this.state.shuffle && (
            <Button
              disabled={this.props.parent.state.disabled}
              onClick={() => {
                this.props.parent.unshuffle()
                this.setState({ shuffle: false })
              }}
            >
              Reset
            </Button>
          )}
        </CardBody>
      </Card>
    )
  }
}

export default class KnuthShuffle extends React.Component {
  state = {
    original: [],
    array: [],
    highlights: [],
    disabled: false,
  }

  insert(data, where) {
    if (data) {
      let arr = this.state.array
      switch (where.toLowerCase()) {
        case "start":
          arr.splice(0, 0, data)
          break
        case "end":
        default:
          arr.splice(arr.length, 0, data)
      }
      this.setState({ array: arr, highlights: [], original: arr })
    } else {
      alert("Submission is empty")
    }
  }

  delete(data, position) {
    let arr = this.state.array
    position = parseInt(position)
    if (data) {
      let length = arr.length
      arr = arr.filter((value) => {
        return value !== data
      })
      if (!arr || arr.length === 0) arr = []
      if (length !== arr.length)
        this.setState({ array: arr, highlights: [], original: arr })
      else alert("Data not found to delete")
    } else if (position >= 0 && position < arr.length) {
      arr = this.state.array
      arr.splice(position, 1)
      this.setState({ array: arr, highlights: [], original: arr })
    } else {
      alert("Unable to delete")
    }
  }

  update(position, value) {
    if (
      position &&
      value &&
      parseInt(position) <= this.state.array.length - 1 &&
      parseInt(position) >= 0
    ) {
      let arr = this.state.array,
        highlights = []
      arr[position] = value
      highlights.push(parseInt(position))
      this.setState({ array: arr, highlights, original: arr })
    } else {
      alert("Cannot update")
    }
  }

  shuffle(i) {
    if (i !== undefined && i !== null) {
      if (i === this.state.array.length) {
        this.setState({ highlights: [], disabled: false })
        return
      }
      this.setState(
        (prevState) => {
          let t,
            s = Math.floor(Math.random() * i),
            highlights = s === i ? [s] : [s, i],
            array = [...prevState.array]
          t = array[s]
          array[s] = array[i]
          array[i] = t
          return {
            highlights,
            array,
            disabled: true,
          }
        },
        () => {
          setTimeout(() => {
            this.shuffle(i + 1)
          }, 1000)
        }
      )
    } else if (!i && this.state.array.length > 0) {
      this.shuffle(0)
    } else {
      alert("Can not Shuffle empty array")
    }
  }

  unshuffle() {
    if (this.state.array.length > 0) {
      this.setState({ array: [...this.state.original] })
    } else {
      alert("Array is empty")
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={3}>
            <Insert parent={this} />
          </Col>
          <Col sm={3}>
            <Delete parent={this} />
          </Col>
          <Col sm={3}>
            <Update parent={this} />
          </Col>
          <Col sm={3}>
            <Shuffle parent={this} />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          {this.state.array.map((value, index) => {
            let highlight = false
            if (this.state.highlights.includes(index)) {
              highlight = true
            }
            return (
              <Element
                highlight={highlight}
                key={`${value}-${index}`}
                data={{ value, index }}
                type="array"
              />
            )
          })}
        </Row>
      </Container>
    )
  }
}
