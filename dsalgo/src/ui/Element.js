import React from "react";
import Link from "./Link";
import Box from "@material-ui/core/Box";

export default class Element extends React.Component {
  render() {
    let elStyles,
      element = null;

    switch (this.props.type.toLowerCase()) {
      case "stack":
        element = [];
        if (this.props.data.index === 0) {
          element.push(
            <Box key="Top" p={1} textAlign="center">
              Top
            </Box>
          );
        }
        elStyles = {
          border: "1px solid white",
          background: "rgba(40,40,160,0.8)"
        };
        if (this.props.highlight) {
          elStyles.background = "rgba(30,150,40,0.8)";
        }
        element.push(
          <Box
            key={this.props.data.index + this.props.data.value}
            p={1}
            style={elStyles}
          >
            <Box p={1} color="white" textAlign="center" fontSize={18}>
              {this.props.data.value}
            </Box>
            <Box color="white" p={1} textAlign="center" fontSize={12}>
              {this.props.data.index}
            </Box>
          </Box>
        );
        break;
      case "array":
        elStyles = {
          border: "1px solid white",
          background: "rgba(40,40,120,0.8)"
        };
        if (this.props.highlight) {
          elStyles.background = "rgba(30,150,40,0.8)";
        }
        element = (
          <Box key={this.props.data.index} p={1} style={elStyles}>
            <Box p={1} color="white" textAlign="center" fontSize={18}>
              {this.props.data.value}
            </Box>
            <Box color="white" p={1} textAlign="center" fontSize={12}>
              {this.props.data.index}
            </Box>
          </Box>
        );
        break;
      case "linkedlist":
        elStyles = {
          border: "1px solid white",
          background: "rgba(40,60,180,0.8)"
        };
        if (this.props.highlight) {
          elStyles.background = "rgba(30,150,40,0.8)";
        }
        element = [
          <Box
            key={this.props.data.value + this.props.data.index}
            p={1}
            style={elStyles}
          >
            <Box p={1} color="white" textAlign="center" fontSize={18}>
              {this.props.data.value}
            </Box>
            <Box color="white" p={1} textAlign="center" fontSize={12}>
              {this.props.data.index}
            </Box>
          </Box>
        ];

        if (this.props.next)
          element.push(
            <Box
              key={this.props.data.index + this.props.data.value + "-nextLink"}
              component="span"
            >
              <Link direction="right" />
            </Box>
          );
        break;
      default:
    }

    return this.props.data && element;
  }
}
