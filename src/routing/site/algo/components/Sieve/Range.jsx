import React, { useState } from "react"
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@material-ui/core"

const Range = React.memo(({ handleRangeSubmit }) => {
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  const handleSubmit = () => {
    handleRangeSubmit(parseInt(start), parseInt(end))
    setStart(null)
    setEnd(null)
  }

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
          onChange={(event) => setStart(event.target.value)}
          value={start ?? ""}
        />
        <TextField
          type="number"
          label="End of Range"
          color="secondary"
          className="mt-2"
          onChange={(event) => setEnd(event.target.value)}
          value={end ?? ""}
        />
        <Button
          style={{
            marginTop: 12,
            backgroundColor: "#403d4a",
            color: "white",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  )
})

Range.displayName = "Range"

export default Range
