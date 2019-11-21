import React, { useReducer, useEffect } from "react";

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

import LineSeparator from "../components/LineSeperator";
import { data02, COLORS, data03, data04, colorOneItem } from "../data/CTR1";
import "../css/home.css";
import ChangeRate from "../components/ChangeRate";
import { useSelector, useDispatch } from "react-redux";
import tagReducer from "../reducer/tagReducer";
const Home = () => {
  const dispatch = useDispatch();
  const tag = useSelector(state => state);
  useEffect(() => dispatch({ type: "tag", tag: "home" }), []);
  useEffect(() => console.log("home", tag), [tag]);
  return (
    <Container>
      <Row>
        <Col sm="4">
          <Card style={{ minHeight: "220px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Revenue Share
              </CardTitle>
              <CardText tag="h3">$20000/40000</CardText>
              <ChangeRate change="increase" number="12%"></ChangeRate>
              <LineSeparator />
              <CardText>
                50% of your Revenue is driven by Recommendation Kit
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card style={{ minHeight: "220px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Products Sold
              </CardTitle>
              <CardText tag="h3">4012</CardText>
              <LineSeparator />
              <CardText>
                50% of your products are sold by Recommendation Kit
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card style={{ minHeight: "220px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Page Views
              </CardTitle>
              <CardText tag="h3">7800</CardText>
              <LineSeparator />
              <CardText>
                The recommendation pages are viewed 7800 times.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="3">
          <Card style={{ minHeight: "200px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Quiz Done
              </CardTitle>
              <CardText tag="h3">3400</CardText>
              <LineSeparator />
              <CardText>The quiz was taken 3400 times.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card style={{ minHeight: "200px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Users
              </CardTitle>
              <CardText tag="h3">3189</CardText>
              <LineSeparator />
              <CardText>3189 users did the Quiz.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card style={{ minHeight: "200px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Average Order Value
              </CardTitle>
              <CardText tag="h3">$87.16</CardText>
              <LineSeparator />
              <CardText>The average order value is $87.16.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card style={{ minHeight: "200px" }}>
            <CardBody>
              <CardTitle tag="h5" className="cardHeader">
                Profit Per Purchase
              </CardTitle>
              <CardText tag="h3">$13</CardText>
              <LineSeparator />
              <CardText>$13 were made for every order</CardText>
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
                <CardTitle tag="h5" className="cardHeader">
                  Clicks Through Rate
                </CardTitle>
                <CardText tag="h3">34%</CardText>
                <LineSeparator />
                <CardText>
                  The click through rate is 34% in the last week
                </CardText>
              </CardBody>
              <CardBody>
                <PieChart width={250} height={220}>
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
                      Click Through Rate 34%
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
                <CardTitle tag="h5" className="cardHeader">
                  Total Clicks
                </CardTitle>
                <CardText tag="h3">7000</CardText>
                <LineSeparator />
                <CardText>The Click number is 7000 last week.</CardText>
              </CardBody>
              <CardBody
                style={{
                  display: "flex",
                  flex: 2,
                  justifyContent: "center"
                }}
              >
                <PieChart width={250} height={220}>
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
                      Total Clicks number 7000.
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
      <br></br>
      <Row>
        <Col xs="6">
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
                <CardTitle tag="h5" className="cardHeader">
                  Conversion Rate
                </CardTitle>
                <CardText tag="h3">17%</CardText>
                <LineSeparator />
                <CardText>The conversion rate is 17% in the last week</CardText>
              </CardBody>
              <CardBody
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center"
                }}
              >
                <PieChart width={250} height={220}>
                  <Legend></Legend>
                  <Tooltip />
                  <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data04}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={45}
                    label
                  >
                    {data04.map((entry, index) => (
                      <Cell fill={colorOneItem[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </CardBody>
            </div>
          </Card>
        </Col>
        <Col xs="6"></Col>
      </Row>
      <br></br>
    </Container>
  );
};

export default Home;
