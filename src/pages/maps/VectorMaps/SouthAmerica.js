import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next");
require("../../../vendor/jquery-jvectormap-south_america-mill");

class SouthAmerica extends React.Component {
  drawMap() {
    this.map = $("#south_america_map").vectorMap({
      map: "south_america_mill",
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
    const mapInstance = $("#south_america_map").vectorMap('get','mapObject');
    mapInstance.remove();
  }
  render = () => (
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          South America Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="south_america_map" style={{ height: 300, width: "100%" }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default SouthAmerica;
