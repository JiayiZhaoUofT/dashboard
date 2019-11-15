import React from "react";
import {
  Container,
  Row,
  Col,
  CardTitle,
  Card,
  CardBody,
  CardText,
  CardGroup
} from "reactstrap";
const ChangeRage = props => {
  if (props.change == "increase") {
    return <CardText className="text-success">&uarr; {props.number}</CardText>;
  } else {
    return <CardText className="text-danger">&darr; {props.number}</CardText>;
  }
};

export default ChangeRage;
