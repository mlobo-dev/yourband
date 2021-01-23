import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next");
require("../../../vendor/jquery-jvectormap-africa-mill");

class Africa extends React.Component {
  drawMap() {
    this.map = $("#africa_map").vectorMap({
      map: "africa_mill",
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: "#2196f3"
        }
      }
    });
  }
  componentDidMount() {
    this.drawMap();
  }
  componentWillUnmount() {
    const mapInstance = $("#africa_map").vectorMap('get','mapObject');
    mapInstance.remove();
  }
  render = () => (
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          Africa Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="africa_map" style={{ height: 300, width: "100%" }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default Africa;
