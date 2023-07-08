import React from "react";
import Description from "./Description";
import TapIn from "./TapIn";
import { Container, Row, Col } from "reactstrap";

export const DescriptionAndTapIn = () => {
  return (
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
  );
};

export default DescriptionAndTapIn;
