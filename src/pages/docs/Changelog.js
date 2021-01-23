import React from "react";
import { Link } from "react-router-dom";

import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";

const Changelog = () => (
  <Container fluid>
    <Header>
      <HeaderTitle>Changelog</HeaderTitle>

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/dashboard">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/dashboard">Documentation</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Changelog</BreadcrumbItem>
      </Breadcrumb>
    </Header>

    <Row>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h5" className="mb-0">
              Changelog
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div id="changelog">
              <h4 className="d-inline-block mr-1">
                <Badge color="primary">v3.3.1</Badge>
              </h4>
              <h5 className="d-inline-block">– 28 April, 2020</h5>
              <ul>
                <li>Added chat page (/pages/chat)</li>
                <li>Added docs plugins (/docs/plugins)</li>
                <li>Fixed chartjs console warnings in dev mode</li>
                <li>Fixed react console warnings in dev mode</li>
                <li>Upgraded various dependencies to LTS version</li>
              </ul>
              <h4 className="d-inline-block mr-1">
                <Badge color="primary">v3.3.0</Badge>
              </h4>
              <h5 className="d-inline-block">– 3 November, 2019</h5>
              <ul>
                <li>Swapped fonts with Jost and Hind Vadodara</li>
                <li>Various visual changes</li>
                <li>Upgraded various dependencies to LTS version</li>
              </ul>
              <h4 className="d-inline-block mr-1">
                <Badge color="primary">v3.2.1</Badge>
              </h4>
              <h5 className="d-inline-block">– 8 August, 2019</h5>
              <ul>
                <li>Fixed issues with router in IE11</li>
                <li>Fixed issues with card height in IE11</li>
                <li>Added navbar indicator</li>
                <li>Added pricing page (/pages/pricing)</li>
                <li>Added settings page (/pages/settings)</li>
                <li>Added clients page (/pages/clients)</li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Changelog;
