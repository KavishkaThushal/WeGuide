import React from "react";
import "./searchbar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { HiLocationMarker } from "react-icons/hi";

function SearchBar() {
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4 justify-content-between ">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <div>
              <h5 className="form-title">
                <span>
                  <HiLocationMarker className="form-icon" />
                </span>
                Location
              </h5>
              <input type="text" placeholder="Search by location instead" />
            </div>
          </FormGroup>
          <button className=" search-btn">search</button>
        </Form>
      </div>
    </Col>
  );
}

export default SearchBar;
