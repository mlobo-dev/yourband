import React from "react";
import { Link } from "react-router-dom";

import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  ListGroupItem,
  Media,
  Row,
} from "reactstrap";

import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { Phone, Video, MoreHorizontal } from "react-feather";

const ChatMessage = ({ position, avatar, name, children, time }) => (
  <div className={`chat-message-${position} pb-4`}>
    <div>
      <img
        src={avatar}
        className="rounded-circle mr-1"
        alt={name}
        width="40"
        height="40"
      />
      <div className="text-muted small text-nowrap mt-2">{time}</div>
    </div>
    <div
      className={`flex-shrink-1 bg-light rounded py-2 px-3 ${
        position === "right" ? "mr-3" : "ml-3"
      }`}
    >
      <div className="font-weight-bold mb-1">{name}</div>
      {children}
    </div>
  </div>
);

const Chat = () => (
  <Container fluid>
    <Header>
      <HeaderTitle>Chat</HeaderTitle>

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/dashboard">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/dashboard">Pages</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Chat</BreadcrumbItem>
      </Breadcrumb>
    </Header>

    <Card>
      <Row noGutters>
        <Col lg={5} xl={3} className="border-right">
          <div className="px-4 d-none d-md-block">
            <Media className="align-items-center">
              <Media body>
                <Input type="text" className="my-3" placeholder="Search..." />
              </Media>
            </Media>
          </div>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Badge color="success" className="float-right">
              5
            </Badge>
            <Media>
              <img
                src={avatar5}
                className="rounded-circle mr-1"
                alt="Michelle Bilodeau"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Michelle Bilodeau
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                  Online
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Badge color="success" className="float-right">
              2
            </Badge>
            <Media>
              <img
                src={avatar2}
                className="rounded-circle mr-1"
                alt="Alexander Groves"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Alexander Groves
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                  Online
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar3}
                className="rounded-circle mr-1"
                alt="Kathie Burton"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Kathie Burton
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                  Online
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar4}
                className="rounded-circle mr-1"
                alt="Daisy Seger"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Daisy Seger
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar5}
                className="rounded-circle mr-1"
                alt="Fiona Green"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Fiona Green
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar2}
                className="rounded-circle mr-1"
                alt="Doris Wilder"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Doris Wilder
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar4}
                className="rounded-circle mr-1"
                alt="Haley Kennedy"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Haley Kennedy
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar3}
                className="rounded-circle mr-1"
                alt="Jennifer Chang"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Jennifer Chang
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>

          <hr className="d-block d-lg-none mt-1 mb-0" />
        </Col>
        <Col lg={7} xl={9}>
          <div className="py-2 px-4 border-bottom d-none d-lg-block">
            <Media className="align-items-center py-1">
              <div className="position-relative">
                <img
                  src={avatar3}
                  className="rounded-circle mr-1"
                  alt="Kathie Burton"
                  width="40"
                  height="40"
                />
              </div>
              <Media body className="pl-3">
                <strong>Kathie Burton</strong>
                <div className="text-muted small">
                  <em>Typing...</em>
                </div>
              </Media>
              <div>
                <Button size="lg" color="primary" className="px-3 mr-2">
                  <Phone className="feather" />
                </Button>
                <Button
                  size="lg"
                  color="info"
                  className="mr-2 px-3 d-none d-md-inline-block"
                >
                  <Video className="feather" />
                </Button>
                <Button size="lg" color="light" className="px-3 border">
                  <MoreHorizontal className="feather" />
                </Button>
              </div>
            </Media>
          </div>

          <div className="position-relative">
            <div className="chat-messages p-4">
              <ChatMessage
                position="right"
                name="You"
                avatar={avatar1}
                time="2:33 am"
              >
                Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                prodesset te vix.
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Kathie Burton"
                avatar={avatar3}
                time="2:34 am"
              >
                Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat
                animal commodo.
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar1}
                time="2:35 am"
              >
                Cum ea graeci tractatos.
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Kathie Burton"
                avatar={avatar3}
                time="2:36 am"
              >
                Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                porttitor magna, vitae commodo lectus mauris et velit. Proin
                ultricies placerat imperdiet. Morbi varius quam ac venenatis
                tempus.
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Kathie Burton"
                avatar={avatar3}
                time="2:37 am"
              >
                Cras pulvinar, sapien id vehicula aliquet, diam velit elementum
                orci.
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar1}
                time="2:38 am"
              >
                Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                prodesset te vix.
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Kathie Burton"
                avatar={avatar3}
                time="2:39 am"
              >
                Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat
                animal commodo.
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar1}
                time="2:40 am"
              >
                Cum ea graeci tractatos.
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar1}
                time="2:41 am"
              >
                Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices
                massa, id dignissim metus urna eget purus.
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Kathie Burton"
                avatar={avatar3}
                time="2:42 am"
              >
                Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                porttitor magna, vitae commodo lectus mauris et velit. Proin
                ultricies placerat imperdiet. Morbi varius quam ac venenatis
                tempus.
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar1}
                time="2:43 am"
              >
                Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                prodesset te vix.
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Kathie Burton"
                avatar={avatar3}
                time="2:44 am"
              >
                Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat
                animal commodo.
              </ChatMessage>
            </div>
          </div>

          <div className="flex-grow-0 py-3 px-4 border-top">
            <InputGroup>
              <Input type="text" placeholder="Type your message" />
              <InputGroupAddon addonType="append">
                <Button color="primary">Send</Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Card>
  </Container>
);

export default Chat;
