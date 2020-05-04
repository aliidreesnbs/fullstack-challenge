import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container" style={{ paddingTop: "8rem", width: "20%" }}>
      <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Login</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <Link to="/details">
            <button type="submit" className="btn btn-success btn-block">
              Login
            </button>
          </Link>
        </div>
        <div className="clearfix">
          <label className="pull-left checkbox-inline">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="pull-right">
            Forgot Password?
          </a>
        </div>
      </form>
      <Link to="/signup">
        <p className="text-center">
          <a href="#">Create an Account</a>
        </p>
      </Link>
    </div>
  );
};

export default Login;
