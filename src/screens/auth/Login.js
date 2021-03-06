import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { formDiv, form, input, button } from "./styles";

import { Container } from "../../components/styledComponents";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { useHistory } from "react-router-dom";

import "./auth.css";
import { Button } from "@mui/material";

export default function Login({ location }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = "/";

  useEffect(() => {
    if (userInfo) {
    }
  }, [userInfo, redirect]);

  // console.log("email password", email, password);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email password", email, password);
    dispatch(login(email, password));
    history.push("/");
  };

  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <div style={formDiv}>
          <form style={form}>
            <h3>Login</h3>
            <Input
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
            <Input
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type password"
            />
            <Button
              variant="contained"
              className="mainBtn"
              onClick={(e) => submitHandler(e)}
              // type="submit"
              style={button}
            >
              Login
            </Button>
            <div style={{ width: "100%", textAlign: "center" }}>
              {" "}
              <small>
                New User?
                <Link className="Link" to="/signup">
                  {" "}
                  <span className="linkPera">Create an account</span>{" "}
                </Link>
              </small>
            </div>

            {/* <button type="submit" style={button}>
              Signup
            </button> */}
          </form>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input {...props} style={input} />
    </>
  );
};
