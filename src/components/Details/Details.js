import React from "react";
import "./Details.scss";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div class="container">
      <div class="row">
        <img class="spi-header" src="" />
        <h1>Shipping Information</h1>
        <hr />

        <div class="shipping-info">
          <div class="form-group col-md-6">
            <span class="required-lbl">* </span>
            <label class="control-label" for="firstname">
              First Name
            </label>
            <div class="controls">
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <div class="form-group col-md-6">
            <span class="required-lbl">* </span>
            <label class="control-label" for="lastname">
              Last Name
            </label>
            <div class="controls">
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <div class="form-group col-md-6">
            <span class="required-lbl">* </span>
            <label class="control-label" for="shippingaddress1">
              Shipping Address 1
            </label>
            <div class="controls">
              <input
                id="shippingaddress1"
                name="shippingaddress1"
                type="text"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <div class="form-group col-md-6">
            <label class="control-label" for="shippingaddress2">
              Shipping Address 2
            </label>
            <div class="controls">
              <input
                id="shippingaddress2"
                name="shippingaddress2"
                type="text"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <div class="form-group col-md-6">
            <span class="required-lbl">* </span>
            <label class="control-label" for="shippingcity">
              Shipping City
            </label>
            <div class="controls">
              <input
                id="shippingcity"
                name="shippingcity"
                type="text"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <div class="form-group col-md-6">
            <span class="required-lbl">* </span>
            <label class="control-label" for="postcode">
              Post Code
            </label>
            <div class="controls">
              <input
                id="postcode"
                name="postcode"
                type="text"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <div class="form-group col-md-6">
            <span class="required-lbl">* </span>
            <label class="control-label" for="emailaddress">
              Email Address
            </label>
            <div class="controls">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <div class="form-group col-md-6">
            <label class="control-label" for="phone">
              Phone
            </label>
            <div class="controls">
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <label>
            * To avoid duplication, Type "YES" if you are a current subscriber
            wishing to extend your subscription OR "NO" if you don’t have an
            active subscription
          </label>

          <div class="form-group col-md-6">
            <div class="controls">
              <input
                id="additionalinfo"
                name="additionalinfo"
                type="text"
                placeholder=""
                class="form-control"
                required=""
              />
            </div>
          </div>

          <div class="form-group col-md-12">
            <div class="control-group confirm-btn">
              <label class="control-label" for="placeorderbtn"></label>
              <div class="controls">
                <Link to="/thankyou">
                  <button
                    id="placeorderbtn"
                    name="placeorderbtn"
                    class="btn btn-primary"
                  >
                    Place My Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
