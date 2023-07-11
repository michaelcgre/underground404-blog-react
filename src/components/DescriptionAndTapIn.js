import React from "react";
import Description from "./Description";
import TapIn from "./TapIn";
import { Container, Row, Col } from "reactstrap";
import Background from "../app/assets/BackgroundSmall.png";
import BackgroundLarge from "../app/assets/BackgroundBig.png";
import "../app/styles/description_and_tap_in.css";

export const DescriptionAndTapIn = () => {
  return (
    <div
      className="description-spotify-section"
      style={{
        backgroundImage: "url(" + Background + ")",
      }}
    >
      <Container>
        <Row>
          <Col xs="12" md="6">
            <Description />
          </Col>
          <Col xs="12" md="6">
            <TapIn />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DescriptionAndTapIn;
