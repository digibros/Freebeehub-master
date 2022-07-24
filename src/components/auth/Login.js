import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, TextField } from "@mui/material";
import "../../css/auth.css";
import {
  loginAction,
  signupAction,
  verifyOtpAction,
} from "../../redux/actions/Auth";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import OTPInput, { ResendOTP } from "otp-input-react";
function Login({ close, loginAction, signupAction, verifyOtpAction }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [section, setSection] = useState(0);
  const [disableSignup, setDisableSignup] = useState(true);
  const [OTP, setOTP] = useState("");
  const login = () => {
    loginAction({ phone, password }, (status, res) => {
      if (!status)
        return toast.error(
          res?.response?.data?.error || "Something went wrong!",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            pauseOnHover: false,
            theme: "colored",
          }
        );
      close();
      setPhone("");
      setPassword("");
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "colored",
      });
    });
  };
  const singup = () => {
    signupAction({ name, phone, password }, (status, res) => {
      if (!status)
        return toast.error(res?.response?.error || "Something went wrong!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          pauseOnHover: false,
          theme: "colored",
        });
      setPassword("");
      setSection(2);
      toast.success(res?.data?.msg || "Otp sent succesfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "colored",
      });
    });
  };

  const verifyOtp = () => {
    verifyOtpAction({ phone, OTP }, (status, res) => {
      if (!status)
        return toast.error(res?.response?.error || "Something went wrong!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          pauseOnHover: false,
          theme: "colored",
        });
      close();
      setPhone("");
      setPassword("");
      setOTP("");
      toast.success("Signup Successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "colored",
      });
    });
  };

  return (
    <div className="auth-container">
      <ClearIcon className="closeBtn" onClick={close} />
      {section == 0 ? (
        <div className="auth-content">
          <p className="auth-title"> Sign In to Freebeehub</p>
          <div className="auth-form">
            <TextField
              className="auth-input"
              onChange={(e) => setPhone(e.target.value)}
              label="Phone"
              value={phone || ""}
              variant="standard"
            />
            <TextField
              className="auth-input"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              value={password || ""}
              type="password"
              variant="standard"
            />
            <Button
              variant="contained"
              className="auth-btn primary-btn"
              onClick={login}>
              Sign In
            </Button>
            <p
              style={{
                //   position: "relative",
                textAlign: "center",
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "grey",
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
              className="partition">
              OR
            </p>
            <Button
              variant="outlined"
              onClick={() => setSection(1)}
              className="sec-btn auth-btn ">
              Create Account
            </Button>

            <p className="forget-password">Forget password?</p>
          </div>
        </div>
      ) : section == 1 ? (
        <div className="auth-content">
          <p className="auth-title"> Sign Up to Freebeehub</p>
          <div className="auth-form">
            <TextField
              className="auth-input"
              onChange={(e) => setName(e.target.value)}
              label="Name"
              value={name || ""}
              variant="standard"
              required
            />
            <TextField
              className="auth-input"
              onChange={(e) => setPhone(e.target.value)}
              label="Phone"
              value={phone || ""}
              variant="standard"
              required
            />
            <TextField
              className="auth-input"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              value={password || ""}
              type="password"
              variant="standard"
              required
            />
            <TextField
              className="auth-input"
              onChange={(e) => {
                setCpassword(e.target.value);
                if (password === e.target.value) {
                  setDisableSignup(false);
                } else {
                  setDisableSignup(true);
                }
              }}
              label="Confrim Password"
              value={cpassword || ""}
              type="password"
              variant="standard"
              required
            />
            {disableSignup && cpassword ? (
              <p
                className="text-danger"
                style={{ fontSize: "0.8rem", marginLeft: "5px" }}>
                Password mismatch
              </p>
            ) : null}
            <Button
              variant="contained"
              style={{ marginTop: "25px" }}
              disabled={disableSignup}
              className={disableSignup ? "auth-btn" : "auth-btn primary-btn"}
              onClick={singup}>
              Sign Up
            </Button>
            <p
              style={{
                //   position: "relative",
                textAlign: "center",
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "grey",
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
              className="partition">
              OR
            </p>
            <Button
              variant="outlined"
              onClick={() => setSection(0)}
              className="sec-btn auth-btn ">
              Sign In
            </Button>

            {/* <p className="forget-password">Forget password?</p> */}
          </div>
        </div>
      ) : section == 2 ? (
        <div className="auth-content">
          <p className="auth-title"> Verify OTP</p>
          <div className="auth-form">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              secure={false}
              inputStyles={{
                marginLeft: "5px",
                marginRight: "5px",
                // padding: "20px",
                width: "50px",
                height: "50px",
                color: "black",
              }}
              style={{
                margin: "5px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "15px",
              }}
            />
            <ResendOTP
              onResendClick={() => console.log("Resend clicked")}
              renderButton={(buttonProps) => <p {...buttonProps}>Resend Otp</p>}
              style={{
                border: "none",
                fontSize: "0.8rem",
                marginTop: "10px",
                cursor: "pointer",
                justifyContent: "space-around",
              }}
              inputClassName="otp-input"
            />
            <Button
              variant="contained"
              style={{
                marginTop: "10px",
                backgroundColor: "#00b5cd",
              }}
              className="auth-btn"
              onClick={verifyOtp}>
              Verify Otp
            </Button>
            <p
              style={{
                //   position: "relative",
                textAlign: "center",
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "grey",
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
              className="partition">
              OR
            </p>
            <Button
              variant="outlined"
              onClick={() => setSection(1)}
              className="sec-btn auth-btn ">
              Back
            </Button>
            {/* <p className="forget-password">Forget password?</p> */}
          </div>
        </div>
      ) : null}
    </div>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = { loginAction, signupAction, verifyOtpAction };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
