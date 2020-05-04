import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-form" style={{ paddingTop: "8rem", width: "20%" }}>
      <form action="/examples/actions/confirmation.php" method="post">
        <h2>Create an Account</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control input-lg"
            name="username"
            placeholder="Username"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control input-lg"
            name="email"
            placeholder="Email Address"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control input-lg"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control input-lg"
            name="confirm_password"
            placeholder="Confirm Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="address"
            className="form-control input-lg"
            name="address"
            placeholder="Shipping Address"
            required="required"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success btn-lg btn-block signup-btn"
          >
            Sign Up
          </button>
        </div>
      </form>
      <Link to="/login">
        <div className="text-center">
          Already have an account? <a href="">Login here</a>
        </div>
      </Link>
    </div>
  );
};

export default Signup;
