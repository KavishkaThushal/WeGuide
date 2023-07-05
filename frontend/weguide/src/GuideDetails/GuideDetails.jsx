import React from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import guideDetails from "../assets/data/guideDetails";
import { AiFillStart } from "react-icons/ai";

function GuideDetails() {
  const { id } = useParams();

  const guide = guideDetails.find((guide) => guide.id === id);
  const { photo, name, desc, price, reviews, address } = guide;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="guide__content">
                <img src={photo} alt="" />
                <div className="guide__info">
                  <h2>{name}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="d-flex align-items-center gap-1">
                      <AiFillStart />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default GuideDetails;
