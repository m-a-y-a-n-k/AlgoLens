import React from "react"
import Link from "./Link"
import Box from "@material-ui/core/Box"

const Element = ({ type, data, highlight, next, AllGreater, AllSmaller }) => {
  let element = null
  let elStyles = {
    border: "1px solid white",
    background: "rgba(40,60,180,0.8)",
  }

  if (highlight) {
    elStyles.background = "rgba(30,150,40,0.8)"
  }

  const sanitizedType = type.toLowerCase()

  switch (sanitizedType) {
    case "stack":
      element = [
        data.index === 0 && (
          <Box key="Top" p={1} textAlign="center">
            Top
          </Box>
        ),
        <Box
          key={`${data.index}-${data.value}`}
          p={1}
          style={{
            ...elStyles,
            background: highlight
              ? "rgba(30,150,40,0.8)"
              : "rgba(40,40,160,0.8)",
          }}
        >
          <Box p={1} color="white" textAlign="center" fontSize={18}>
            {data.value}
          </Box>
          <Box color="white" p={1} textAlign="center" fontSize={12}>
            {data.index}
          </Box>
        </Box>,
      ]
      break

    case "array":
    case "linkedlist":
    case "queues":
      element = (
        <div
          key={`${data.value}-${data.index}`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            p={1}
            style={{
              ...elStyles,
              background: highlight
                ? "rgba(30,150,40,0.8)"
                : "rgba(40,60,180,0.8)",
            }}
          >
            <Box p={1} color="white" textAlign="center" fontSize={18}>
              {data.value}
            </Box>
            {data.index >= 0 && (
              <Box p={1} color="white" textAlign="center" fontSize={12}>
                {data.index}
              </Box>
            )}
          </Box>
          {sanitizedType === "queues" && (
            <Box
              color="white"
              p={1}
              className={data.index === 0 || next === false ? "bg-danger" : ""}
              textAlign="center"
              fontSize={12}
            >
              {data.index === 0 && (
                <typography>
                  Front <br />
                </typography>
              )}
              {next === false && <typography>Rear</typography>}
            </Box>
          )}
          {(sanitizedType === "linkedlist" ||
            (sanitizedType === "queues" && next)) && (
            <Box key={`${data.index}-${data.value}-nextlink`} component="span">
              <Link direction="right" />
            </Box>
          )}
        </div>
      )
      break

    case "sets":
      element = (
        <Box
          key={data.value}
          p={1}
          style={{
            ...elStyles,
            background: highlight
              ? "rgba(30,150,40,0.8)"
              : AllGreater
              ? "rgba(242,19,23,0.8)"
              : AllSmaller
              ? "rgba(250,183,0,0.8)"
              : "rgba(40,60,180,0.8)",
            borderRadius: "50%",
            minHeight: "100px",
            minWidth: "100px",
            margin: "20px",
          }}
        >
          <Box p={0} color="white" fontSize={18}>
            <div
              style={{ position: "relative", top: "45%", textAlign: "center" }}
            >
              {data.value}
            </div>
          </Box>
        </Box>
      )
      break

    default:
  }

  return data && element
}

export default Element
