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
          <Col xs="12" lg="6">
            <Description />
          </Col>
          <Col
            xs="12"
            lg="5"
            className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-content-center d-lg-block"
          >
            <TapIn />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DescriptionAndTapIn;
