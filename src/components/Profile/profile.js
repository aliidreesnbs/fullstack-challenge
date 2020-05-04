import React from "react";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 pb-5">
          <div className="author-card pb-3">
            <div
              className="author-card-cover"
              style={{
                backgroundImage:
                  "url(https://demo.createx.studio/createx-html/img/widgets/author/cover.jpg);"
              }}
            >
              <a
                className="btn btn-style-1 btn-white btn-sm"
                href="#"
                data-toggle="tooltip"
                title=""
                data-original-title="You currently have 290 Reward points to spend"
              ></a>
            </div>
            <div className="author-card-profile">
              <div className="author-card-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="Daniel Adams"
                />
              </div>
              <div className="author-card-details">
                <h5 className="author-card-name text-lg">Antonio Moreno</h5>
                <span className="author-card-position">
                  Joined February 06, 2017
                </span>
              </div>
            </div>
          </div>
          <div className="wizard">
            <nav className="list-group list-group-flush">
              <a className="list-group-item active" href="#">
                <i className="fe-icon-user text-muted"></i>Profile Settings
              </a>
            </nav>
          </div>
        </div>
        <div className="col-lg-8 pb-5">
          <form className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-fn">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="account-fn"
                  value="Daniel"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-ln">Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="account-ln"
                  value="Adams"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-email">E-mail Address</label>
                <input
                  className="form-control"
                  type="email"
                  id="account-email"
                  value="daniel.adams@example.com"
                  disabled=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-phone">Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  id="account-phone"
                  value="+7 (805) 348 95 72"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-pass">New Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="account-pass"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-confirm-pass">Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="account-confirm-pass"
                />
              </div>
            </div>
            <div className="col-12">
              <hr className="mt-2 mb-3" />
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <button
                  className="btn btn-style-1 btn-primary"
                  type="button"
                  data-toast=""
                  data-toast-position="topRight"
                  data-toast-type="success"
                  data-toast-icon="fe-icon-check-circle"
                  data-toast-title="Success!"
                  data-toast-message="Your profile updated successfuly."
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
