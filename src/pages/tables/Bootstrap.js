import React from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  Table
} from "reactstrap";

import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";

import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const BasicTable = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Basic Table</CardTitle>
      <h6 className="card-subtitle text-muted">
        Using the most basic table markup, here’s how .table-based tables look
        in Bootstrap.
      </h6>
    </CardHeader>
    <Table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Michelle Bilodeau</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Alexander Groves</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Kathie Burton</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Daisy Seger</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const StripedRows = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Striped Rows</CardTitle>
      <h6 className="card-subtitle text-muted">
        Use <code>striped</code> to add zebra-striping to any table row within
        the <code>&#x3C;tbody&#x3E;</code>.
      </h6>
    </CardHeader>
    <Table striped>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Michelle Bilodeau</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Alexander Groves</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Kathie Burton</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Daisy Seger</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const CondensedTable = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Condensed Table</CardTitle>
      <h6 className="card-subtitle text-muted">
        Add <code>size="sm"</code> to make tables more compact by cutting cell
        padding in half.
      </h6>
    </CardHeader>
    <Table size="sm" striped>
      <thead>
        <tr>
          <th>Operation System</th>
          <th className="text-right">Users</th>
          <th className="text-right">Share</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Windows</td>
          <td className="text-right">8.232</td>
          <td className="text-right">40%</td>
        </tr>
        <tr>
          <td>Mac OS</td>
          <td className="text-right">3.322</td>
          <td className="text-right">20%</td>
        </tr>
        <tr>
          <td>Linux</td>
          <td className="text-right">4.232</td>
          <td className="text-right">34%</td>
        </tr>
        <tr>
          <td>FreeBSD</td>
          <td className="text-right">1.121</td>
          <td className="text-right">12%</td>
        </tr>
        <tr>
          <td>Chrome OS</td>
          <td className="text-right">1.331</td>
          <td className="text-right">15%</td>
        </tr>
        <tr>
          <td>Android</td>
          <td className="text-right">2.301</td>
          <td className="text-right">20%</td>
        </tr>
        <tr>
          <td>iOS</td>
          <td className="text-right">1.162</td>
          <td className="text-right">14%</td>
        </tr>
        <tr>
          <td>Windows Phone</td>
          <td className="text-right">562</td>
          <td className="text-right">7%</td>
        </tr>
        <tr>
          <td>Other</td>
          <td className="text-right">1.181</td>
          <td className="text-right">14%</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);
const HoverableRows = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Hoverable Rows</CardTitle>
      <h6 className="card-subtitle text-muted">
        Add <code>hover</code> to enable a hover state on table rows within a{" "}
        <code>&#x3C;tbody&#x3E;</code>.
      </h6>
    </CardHeader>
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src={avatar5}
              width="48"
              height="48"
              className="rounded-circle mr-2"
              alt="Avatar"
            />{" "}
            Michelle Bilodeau
          </td>
          <td>864-348-0485</td>
          <td>June 21, 1961</td>
        </tr>
        <tr>
          <td>
            <img
              src={avatar2}
              width="48"
              height="48"
              className="rounded-circle mr-2"
              alt="Avatar"
            />{" "}
            Alexander Groves
          </td>
          <td>914-939-2458</td>
          <td>May 15, 1948</td>
        </tr>
        <tr>
          <td>
            <img
              src={avatar3}
              width="48"
              height="48"
              className="rounded-circle mr-2"
              alt="Avatar"
            />{" "}
            Kathie Burton
          </td>
          <td>704-993-5435</td>
          <td>September 14, 1965</td>
        </tr>
        <tr>
          <td>
            <img
              src={avatar4}
              width="48"
              height="48"
              className="rounded-circle mr-2"
              alt="Avatar"
            />{" "}
            Daisy Seger
          </td>
          <td>765-382-8195</td>
          <td>April 2, 1971</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const BorderedTable = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Bordered Table</CardTitle>
      <h6 className="card-subtitle text-muted">
        Add <code>bordered</code> for borders on all sides of the table and
        cells.
      </h6>
    </CardHeader>
    <Table bordered>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Michelle Bilodeau</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Alexander Groves</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Kathie Burton</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Daisy Seger</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const ContextualClasses = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Contextual Classes</CardTitle>
      <h6 className="card-subtitle text-muted">
        Use contextual classes to color table rows or individual cells.
      </h6>
    </CardHeader>
    <Table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Michelle Bilodeau</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr className="table-primary">
          <td>Alexander Groves</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Kathie Burton</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr className="table-success">
          <td>Daisy Seger</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <FontAwesomeIcon
              icon={faPen}
              fixedWidth
              className="align-middle mr-1"
            />
            <FontAwesomeIcon
              icon={faTrash}
              fixedWidth
              className="align-middle"
            />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const ResponsiveTable = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Always responsive</CardTitle>
      <h6 className="card-subtitle text-muted">
        Across every breakpoint, use <code>responsive</code> for horizontally
        scrolling tables.
      </h6>
    </CardHeader>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const Tables = () => (
  <Container fluid>
    <Header>
      <HeaderTitle>Tables</HeaderTitle>

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/dashboard">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/dashboard">Tables</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Tables</BreadcrumbItem>
      </Breadcrumb>
    </Header>

    <Row>
      <Col lg="6">
        <BasicTable />
      </Col>
      <Col lg="6">
        <StripedRows />
      </Col>
      <Col lg="6">
        <CondensedTable />
      </Col>
      <Col lg="6">
        <HoverableRows />
      </Col>
      <Col lg="6">
        <BorderedTable />
      </Col>
      <Col lg="6">
        <ContextualClasses />
      </Col>
      <Col lg="12">
        <ResponsiveTable />
      </Col>
    </Row>
  </Container>
);

export default Tables;
