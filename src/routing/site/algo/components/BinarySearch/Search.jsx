import React, { useState } from "react"
import {
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Alert,
} from "reactstrap"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Button from "@material-ui/core/Button"

const Search = React.memo(({ parent, alertId }) => {
  const [data, setData] = useState(null)

  const handleInputChange = (event) => {
    setData(event.target.value)
  }

  const handleSubmit = () => {
    parent.search(data)
    setData(null)
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Search a Value
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {parent.alert && parent.alert.alertId === alertId && (
          <Alert
            color={parent.alert.type}
            isOpen={!!parent.alert.text}
            toggle={() => {
              parent.setAlert(null)
            }}
          >
            {parent.alert.text}
          </Alert>
        )}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Value</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            placeholder="Value"
            onChange={handleInputChange}
            value={data ?? ""}
          />
        </InputGroup>
        <Button
          className="mt-4"
          style={{ backgroundColor: "#403d4a", color: "white" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </AccordionDetails>
    </Accordion>
  )
})

Search.displayName = "BinarySearch.Search"

export default Search
