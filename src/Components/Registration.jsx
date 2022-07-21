import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [loadSubmit, setloadSubmit] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const rePasswordHandler = (e) => {
    setRePassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && password !== "" && repassword !== "") {
      setEmptyError(false);
      if (password === repassword) {
        setloadSubmit(true);
      } else {
        setPwdError(true);
      }
    } else {
      setEmptyError(true);
    }
    
  };

  // const someFunction = () => {
  //   setloadSubmit(false);
  // };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up{" "}
                      </p>

                      {!loadSubmit && (
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                value={name}
                                onChange={nameHandler}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                value={email}
                                onChange={emailHandler}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                value={password}
                                onChange={passwordHandler}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                                value={repassword}
                                onChange={rePasswordHandler}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Repeat your password
                              </label>
                              {pwdError && (
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4cd"
                                  style={{ color: "red" }}
                                >
                                  Both password not matched Please type same
                                  password!!!!!
                                </label>
                              )}
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={submitHandler}
                            >
                              Register
                            </button>
                          </div>
                          {emptyError && (
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                              style={{ color: "red" }}
                            >
                              You didn't enter some field Please enter some
                              data!!!!!
                            </label>
                          )}
                        </form>
                      )}
                      {loadSubmit && (
                        <>
                        <div className="row">
                          <div className="col-sm-5">
                          <label
                            className="text-xl-center d-block bg-success "
                            style={{ color: "white" }}
                          >
                            Registered Successfull {name}
                          </label></div>
                          <div className="col-sm-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={()=>navigate('/login', {replace:true})}
                          >
                            Login here
                          </button></div></div>
                        </>
                      )}
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Pic not available"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
