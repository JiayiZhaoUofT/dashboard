import React from "react";

import {
  Container,
  Row,
  Col,
  CardTitle,
  Card,
  CardBody,
  CardText
} from "reactstrap";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  BarChart,
  Bar,
  Cell,
  Label
} from "recharts";
import moment from "moment";
import numeral from "numeral";
import cubejs from "@cubejs-client/core";
import Chart from "../components/Chart";
import LineSeparator from "../components/LineSeperator";
import { data02, COLORS, data03 } from "../data/CTR1";

const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_TOKEN, {
  apiUrl: process.env.REACT_APP_API_URL
});
const numberFormatter = item => numeral(item).format("0,0");
const dateFormatter = item => moment(item).format("MMM YY");

const renderSingleValue = (resultSet, key) => (
  <h1 height={300}>{numberFormatter(resultSet.chartPivot()[0][key])}</h1>
);
const Home = () => {
  return (
    <Container fluid className="mainPageContent">
      <CardTitle tag="h4" style={{ color: "#8884d8" }}>
        Home Overall Analytics
      </CardTitle>
      <Row>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Revenue Share</CardTitle>
              <CardText tag="h1">$20000/40000</CardText>
              <LineSeparator />
              <CardText>
                50% of your Revenue is driven by Recommendation Kit
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Products Sold</CardTitle>
              <CardText tag="h1">40 /50</CardText>
              <LineSeparator />
              <CardText>
                80% of your products are sold by Recommendation Kit
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Page Views</CardTitle>
              <CardText tag="h1">780</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Quiz</CardTitle>
              <CardText tag="h1">3400</CardText>
              <LineSeparator />
              <CardText>
                3400 times quiz were done by 3140 users to get recommendation
                products
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Users</CardTitle>
              <CardText tag="h1">70%</CardText>
              <LineSeparator />
              <CardText>
                70% users did the Quiz and buy recommendation products
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Orders by Quiz</CardTitle>
              <CardText tag="h1">4000</CardText>
              <LineSeparator />
              <CardText>
                4000 Orders were made to buy recommendation products
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Revenue by Quiz</CardTitle>
              <CardText tag="h1">13400$</CardText>
              <LineSeparator />
              <CardText>
                13400$ Revenues produced by the recommendation products from
                quiz
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col sm="6">
          <Card>
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <CardBody>
                <CardTitle tag="h5">Total Clicks</CardTitle>
                <CardText tag="h1">34%</CardText>
                <LineSeparator />
                <CardText>7000 clicks in lask week</CardText>
              </CardBody>
              <CardBody>
                <PieChart width={200} height={220}>
                  <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={45}
                    paddingAngle={5}
                    label
                  >
                    {data02.map((entry, index) => (
                      <Cell fill={COLORS[index]} />
                    ))}
                    <Label position="center" fontSize="10" width={70}>
                      Conversion Number 2000
                    </Label>
                  </Pie>
                  <Legend></Legend>
                  <Tooltip />
                </PieChart>
              </CardBody>
            </div>
          </Card>
        </Col>
        <Col>
          <Card>
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <CardBody
                style={{
                  flex: 1
                }}
              >
                <CardTitle tag="h5">Total Click Trough Rate</CardTitle>
                <CardText tag="h1">7000</CardText>
                <LineSeparator />
                <CardText>The Click Through Rate is 34% last week</CardText>
              </CardBody>
              <CardBody
                style={{
                  display: "flex",
                  flex: 2,
                  justifyContent: "center"
                }}
              >
                <PieChart width={200} height={220}>
                  <Pie
                    data={data03}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={45}
                    paddingAngle={5}
                    label
                  >
                    {data03.map((entry, index) => (
                      <Cell fill={COLORS[index]} />
                    ))}
                    <Label position="center" fontSize="10" width={70}>
                      Conversion Number 2000
                    </Label>
                  </Pie>
                  <Legend></Legend>
                  <Tooltip />
                </PieChart>
              </CardBody>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
