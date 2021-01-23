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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import iconsSolid from "./iconsSolid";
import iconsRegular from "./iconsSolid";
import iconsBrands from "./iconsSolid";

const Icon = ({ icon }) => (
  <Col md="6" lg="3">
    <div className="mb-2">
      <FontAwesomeIcon
        className="align-middle mr-2"
        icon={icon.icon}
        fixedWidth
      />
      <span className="align-middle">{icon.name}</span>
    </div>
  </Col>
);

const FontAwesomeIcons = () => (
  <Container fluid>
    <Header>
      <HeaderTitle>Font Awesome</HeaderTitle>

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/dashboard">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/dashboard">Icons</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Font Awesome</BreadcrumbItem>
      </Breadcrumb>
    </Header>

    <Card>
      <CardHeader>
        <CardTitle tag="h5">Font Awesome Icons</CardTitle>
        <h6 className="card-subtitle text-muted">
          The web’s most popular icon set and toolkit
        </h6>
      </CardHeader>
      <CardBody>
        <div className="mb-3">
          <h6 className="card-subtitle mb-2 text-muted">Solid icons</h6>
          <Row>
            {iconsSolid.map((icon, iconKey) => (
              <Icon icon={icon} key={iconKey} />
            ))}
          </Row>
        </div>
        <hr />
        <div className="mb-3">
          <h6 className="card-subtitle mb-2 text-muted">Regular icons</h6>
          <Row>
            {iconsRegular.map((icon, iconKey) => (
              <Icon icon={icon} key={iconKey} />
            ))}
          </Row>
        </div>
        <hr />
        <div>
          <h6 className="card-subtitle mb-2 text-muted">Brand icons</h6>
          <Row>
            {iconsBrands.map((icon, iconKey) => (
              <Icon icon={icon} key={iconKey} />
            ))}
          </Row>
        </div>
      </CardBody>
    </Card>
  </Container>
);

export default FontAwesomeIcons;
