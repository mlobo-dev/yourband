import React from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row
} from "reactstrap";

import Header from "../../../components/Header";
import HeaderTitle from "../../../components/HeaderTitle";

import iconsIOS from "./iconsIOS";
import iconsMaterial from "./iconsMaterial";

const Icon = ({ icon: Icon, name }) => (
  <Col md="6" lg="3">
    <div className="mb-2">
      <Icon className="mr-2" />
      <span className="align-middle">{name}</span>
    </div>
  </Col>
);

const IonIcons = () => (
  <Container fluid>
    <Header>
      <HeaderTitle>Ion Icons</HeaderTitle>

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/dashboard">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/dashboard">Icons</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Ion Icons</BreadcrumbItem>
      </Breadcrumb>
    </Header>

    <Card>
      <CardHeader>
        <CardTitle tag="h5">Ion Icons - iOS</CardTitle>
        <h6 className="card-subtitle text-muted">
          The premium icon pack for Ionic Framework
        </h6>
      </CardHeader>
      <CardBody>
        <Row>
          {iconsIOS.map((icon, iconKey) => (
            <Icon icon={icon.icon} name={icon.name} key={iconKey} />
          ))}
        </Row>
      </CardBody>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle tag="h5">Ion Icons - Material</CardTitle>
        <h6 className="card-subtitle text-muted">
          The premium icon pack for Ionic Framework
        </h6>
      </CardHeader>
      <CardBody>
        <Row>
          {iconsMaterial.map((icon, iconKey) => (
            <Icon icon={icon.icon} name={icon.name} key={iconKey} />
          ))}
        </Row>
      </CardBody>
    </Card>
  </Container>
);

export default IonIcons;
