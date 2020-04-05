import React, { useState } from "react";
import { signin } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { removeAlert } from "../../store/actions/alertActions";
import { setAlert } from "../../store/actions/alertActions";
import { withRouter, Link } from "react-router-dom";
import validateLogin from "../../validation/validateLogin";
import Alert from "../Alert/Alert";
import GoogleLoginComponent from "./GoogleLoginComponent";

const Signin = ({
  signin,
  history,
  error,
  setAlert,
  auth: { isAuthenticated },
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    touched: {
      email: false,
      password: false,
    },
    errors: {},
  });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async e => {
    e.preventDefault();

    // ******************Form validation with no disabled button************************
    // const errors = validateLogin(email, password);
    // setFormData({
    //   ...formData,
    //   errors: { ...errors },
    //   touched: { ...formData.touched, email: true },
    // });
    // if (Object.keys(errors).length > 0) {
    //   return;
    // }
    // console.log("test that form didn't submit");
    // ******************Form validation with no disabled button************************

    let userData = { email, password };
    signin(userData, history);
    setFormData({
      touched: {
        email: false,
        password: false,
      },
      email: "",
      password: "",
    });
    history.push("/");
  };
  const handleBlur = field => {
    setFormData({
      ...formData,
      touched: { ...formData.touched, [field]: true },
    });
  };
  const errors = validateLogin(email, password);
  const isDisabled = Object.keys(errors).length > 0;
  return (
    <div className="container">
      <div className="m-3">
        <h2 className="mt-5 mb-5">Sign In</h2>
        <Alert />
        <GoogleLoginComponent />
        <form onSubmit={onSubmit} noValidate>
          <div className="form-group">
            <label className="text-muted">Email</label>
            <input
              onChange={onChange}
              type="email"
              className="form-control"
              value={email || ""}
              name="email"
              onBlur={() => handleBlur("email")}
            />

            {/* // ******************Form validation with no disabled button************************  */}

            {/* {formData.errors.email && formData.touched.email && (
              <small className="form-text" style={{ color: "red" }}>
                {errors.email}
              </small>
            )} */}

            {/* // ******************Form validation with no disabled button************************  */}

            {errors.email && formData.touched.email && (
              <small className="form-text" style={{ color: "red" }}>
                {errors.email}
              </small>
            )}
          </div>
          <div className="form-group">
            <label className="text-muted">Password</label>
            <input
              onChange={onChange}
              type="password"
              className="form-control"
              value={password || ""}
              name="password"
              onBlur={() => handleBlur("password")}
            />
            {errors.password && formData.touched.password && (
              <small className="form-text" style={{ color: "red" }}>
                {errors.password}
              </small>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-raised btn-primary"
            // disabled={isDisabled}
          >
            Submit
          </button>
        </form>
        <Link to="reset-password">Forgot password</Link>
      </div>
      <div
        className="d-flex justify-content-between w-50"
        style={{ border: "2px solid black", margin: "20px auto" }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            margin: " 200px auto",
            border: "2px solid red",
          }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Test
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            margin: " 200px auto",
            border: "2px solid red",
          }}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Test
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error,
});
export default connect(mapStateToProps, { signin, removeAlert, setAlert })(
  withRouter(Signin)
);
