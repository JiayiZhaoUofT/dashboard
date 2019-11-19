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
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  CartesianGrid,
  PieChart,
  Pie,
  Label,
  Cell
} from "recharts";
import moment from "moment";
import numeral from "numeral";
import cubejs from "@cubejs-client/core";
import Chart from "../components/Chart";
import LineSeparator from "../components/LineSeperator";
import { ctr_fp, data01, colorOneItem } from "../data/CTR1";
import ChangeRate from "../components/ChangeRate";

const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_TOKEN, {
  apiUrl: process.env.REACT_APP_API_URL
});
const numberFormatter = item => numeral(item).format("0,0");
const dateFormatter = item => moment(item).format("MMM YY");

const renderSingleValue = (resultSet, key) => (
  <h1 height={300}>{numberFormatter(resultSet.chartPivot()[0][key])}</h1>
);

const FrontPage = () => {
  return (
    <Container>
      <CardTitle tag="h4" style={{ color: "#8884d8" }}>
        Front Page Analysis
      </CardTitle>
      <Row className="fpRow1">
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Click Through Rate
              </CardTitle>
              <CardText tag="h3">30%</CardText>
              {/* <ChangeRate number="15%" change="increase"></ChangeRate> */}
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Total Clicks Numbers
              </CardTitle>
              <CardText tag="h3">3000</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Visits
              </CardTitle>
              <CardText tag="h3">10000</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col sm="4">
          <Card style={{ flexDirection: "row" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Conversion Rate
              </CardTitle>
              <CardText tag="h3">20%</CardText>

              <CardText></CardText>
            </CardBody>
            <CardBody>
              <PieChart width={100} height={100}>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  innerRadius={35}
                >
                  {data01.map((entry, index) => (
                    <Cell fill={colorOneItem[index]} />
                  ))}
                  <Label position="center" fontSize="10" width={70}>
                    Conversion Number 2000
                  </Label>
                </Pie>
              </PieChart>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Number of Orders</CardTitle>
              <CardText tag="h3">2000</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Revenue
              </CardTitle>
              <CardText tag="h3">$40000</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col sm="4">
          <Card style={{ minHeight: "300px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                CTR Over Time
              </CardTitle>
              <Chart
                cubejsApi={cubejsApi}
                query={{
                  measures: ["Users.count"],
                  timeDimensions: [
                    {
                      dimension: "Users.createdAt",
                      dateRange: ["2017-01-01", "2018-12-31"],
                      granularity: "month"
                    }
                  ]
                }}
                render={resultSet => (
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={resultSet.chartPivot()}>
                      <XAxis dataKey="category" tickFormatter={dateFormatter} />
                      <YAxis tickFormatter={numberFormatter} />
                      <Tooltip labelFormatter={dateFormatter} />
                      <Area
                        type="monotone"
                        dataKey="Users.count"
                        name="Users"
                        stroke="rgb(106, 110, 229)"
                        fill="rgba(106, 110, 229, .16)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card style={{ minHeight: "300px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Click Through Rate By device
              </CardTitle>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ctr_fp}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Bar dataKey="desktop" name="desktop" fill="#49457B" />
                  <Bar dataKey="mobile" name="mobile" fill="#FF7C78" />
                  <Legend></Legend>
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Average Order Value
              </CardTitle>
              <CardText tag="h3">$83</CardText>
              <ChangeRate change="increase" number="12%"></ChangeRate>
              <LineSeparator />
              <CardTitle tag="h5" className="cardHeader">
                Average Avenue per Oder
              </CardTitle>
              <CardText tag="h3">$10</CardText>
              <ChangeRate change="increase" number="12%"></ChangeRate>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FrontPage;
