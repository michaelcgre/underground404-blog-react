import React from "react";
import Description from "./Description";
import TapIn from "./TapIn";
import { Container, Row, Col } from "reactstrap";
import "../app/styles/description_and_tap_in.css";

export const DescriptionAndTapIn = () => {
  return (
    <div className="description-spotify-section">
      <Container>
        <Row>
          <Col xs="12" lg="6">
            <Description />
          </Col>
          <Col
            xs="12"
            lg="5"
            className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-content-center d-lg-block mt-lg-0"
          >
            <TapIn />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DescriptionAndTapIn;
