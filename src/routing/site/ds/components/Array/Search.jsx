import React, { useState, useCallback } from "react"
import {
  InputGroup,
  Input,
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
} from "@material-ui/core"

const Search = ({ array, updateState, alertId }) => {
  const [data, setData] = useState(null)
  const [alert, setAlert] = useState(null)

  const search = useCallback(() => {
    if (data) {
      const highlights = array
        .map((value, index) => (value === data ? index : -1))
        .filter((index) => index !== -1)
      const foundMatches = highlights.length > 0
      setAlert({
        text: foundMatches
          ? "Searched values are highlighted"
          : "No matches found",
        type: "success",
        alertId: 4,
      })
      updateState({ highlights })
    } else {
      setAlert({ text: "Empty Search", type: "danger", alertId: 4 })
    }
  }, [array, data, updateState])

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Search Element (Value at Position)
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {alert && alert.alertId === alertId && (
          <Alert
            color={alert.type}
            isOpen={!!alert.text}
            toggle={() => {
              setAlert(null)
            }}
          >
            {alert.text}
          </Alert>
        )}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Value</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Value"
            onChange={(event) => setData(event.target.value)}
            value={data ?? ""}
          />
        </InputGroup>
        <Button
          className="mt-4"
          style={{ backgroundColor: "#403d4a", color: "white" }}
          onClick={() => {
            search()
            setData(null)
          }}
        >
          Submit
        </Button>
      </AccordionDetails>
    </Accordion>
  )
}

export default Search
