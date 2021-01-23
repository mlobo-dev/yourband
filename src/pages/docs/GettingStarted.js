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

import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";

const Introduction = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Introduction
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div id="introduction">
        <p className="lead">
          Hello, I hope you find this template useful. Spark React has been
          crafted on top of Bootstrap 4 and React. The included docs don't
          replace the official ones, but provide a clear view of all extended
          styles and new components that this template provides on top of
          Bootstrap 4.
        </p>

        <p>
          The docs includes information to understand how the theme is
          organized, how to make changes to the source code, and how to compile
          and extend it to fit your needs.
        </p>
        <p>Thanks, and good luck!</p>
      </div>
    </CardBody>
  </Card>
);

const QuickStart = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Quick start
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div id="quick-start">
        <p>
          This project was bootstrapped with{" "}
          <a href="https://github.com/facebook/create-react-app">
            Create React App
          </a>
          . You'll need to install <a href="https://nodejs.org/en/">Node.js</a>{" "}
          before using Spark React.
        </p>

        <p className="mb-2">
          Once Node.js is installed, run <code>npm install</code> to install the
          rest of Spark React's dependencies. All dependencies will be
          downloaded to the <code>node_modules</code> directory.
        </p>
        <pre className="snippet">npm install</pre>

        <p className="mb-2">
          Now you're ready to modify the source files and generate new{" "}
          <code>build/</code> files. Spark is using webpack and webpack-serve to
          automatically detect file changes and start a local webserver at{" "}
          <code>http://localhost:3000</code>.
        </p>
        <pre className="snippet">npm start</pre>
      </div>
    </CardBody>
  </Card>
);

const BuildTools = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Build tools
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div id="build-tools">
        <p className="mb-2">
          Start a local webserver at <code>http://localhost:3000</code> and
          detect file changes:
        </p>
        <pre className="snippet">npm start</pre>

        <p className="mb-2">
          Compile, optimize, minify and uglify all source files to{" "}
          <code>build/</code>:
        </p>
        <pre className="snippet">npm run build</pre>
      </div>
    </CardBody>
  </Card>
);

const Contents = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Contents
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div id="contents">
        <p>
          Inside the zip-file you'll find the following directories and files.
          Both compiled and minified distrubution files, as well as the source
          files are included in the package.
        </p>

        <pre className="snippet">{`theme/
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  ├── README.md
  ├── build/
  ├── public/
  │   ├── index.html
  │   └── manifest.json
  └── src/
      ├── assets/
      │   ├── img/
      │   └── scss/
      ├── components/
      ├── layouts/
      ├── pages/
      ├── redux/
      ├── routes/
      ├── vendor/
      ├── App.js
      └── index.js
      `}</pre>
      </div>
    </CardBody>
  </Card>
);

const Documentation = () => (
  <Container fluid>
    <Header>
      <HeaderTitle>Getting Started</HeaderTitle>

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/dashboard">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/dashboard">Documentation</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Getting Started</BreadcrumbItem>
      </Breadcrumb>
    </Header>

    <Row>
      <Col lg="6">
        <Introduction />
        <QuickStart />
      </Col>
      <Col lg="6">
        <BuildTools />
        <Contents />
      </Col>
    </Row>
  </Container>
);

export default Documentation;
