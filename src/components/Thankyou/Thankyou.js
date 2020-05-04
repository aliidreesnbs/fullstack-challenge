import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div class="jumbotron text-xs-center">
      <h1 class="display-3">Thank You!</h1>
      <p class="lead">
        <strong>Please check your email</strong> for further instructions on how
        to complete your account setup.
      </p>
      <p>
        Having trouble? <a href="">Contact us</a>
      </p>
      <p class="lead">
        <Link to="/products">
          <a class="btn btn-primary btn-sm" href="" role="button">
            Continue to homepage
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Thankyou;
