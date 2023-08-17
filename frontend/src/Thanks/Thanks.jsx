import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./thanks.css";

function Thanks() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="thank__you text-center mt-5 mb-5">
              <span>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h1 className="mb-4">Hired....</h1>
              <button className="back_btn">
                <Link to="/home">Back to Home</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Thanks;
