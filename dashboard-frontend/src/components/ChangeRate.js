import React from "react";
import { CardText } from "reactstrap";
const ChangeRage = props => {
  if (props.change === "increase") {
    return <CardText className="text-success">&uarr; {props.number}</CardText>;
  } else {
    return <CardText className="text-danger">&darr; {props.number}</CardText>;
  }
};

export default ChangeRage;
