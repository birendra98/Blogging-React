import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadSubmit, setloadSubmit] = useState(false);
  

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if ( email !== "" && password !== "") {
      
      setloadSubmit(true);
      
    } else {
      setloadSubmit(false);
    }
    
    
    
  };

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
                        Login
                      </p>
                      {!loadSubmit && (<form className="mx-1 mx-md-4">
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
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={submitHandler}
                          >
                            Login
                          </button>
                        </div>
                      </form>)}

                      {loadSubmit && (
                        <>
                        <div className="row">
                          <div className="col-sm-5">
                          <label
                            className="text-xl-center d-block bg-success "
                            style={{ color: "white" }}
                          >
                            Registered Successfull {email}
                          </label></div>
                          <div className="col-sm-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={()=> navigate('/register', {replace:true})}
                          >
                            Register Again
                          </button></div></div>
                        </>
                      )}


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

export default Login;
