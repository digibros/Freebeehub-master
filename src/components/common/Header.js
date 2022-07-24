import React, { useEffect } from "react";
import "../../css/header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { connect } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutAction } from "../../redux/actions/Auth";
function Header({ openModal, user, logoutAction }) {
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-logo">FreebeeHub</div>
        <div className="input-div-lg">
          <input
            type="text"
            className="header-search-lg"
            placeholder="Search Here..."
          />
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="user-details-lg">
        <div className="location">
          <KeyboardArrowDownIcon
            className="location-icon"
            style={{ marginBottom: "3px" }}
          />{" "}
          Guntur
        </div>
        {user?.customer_id ? (
          <>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "0.9rem",
                margin: 0,
                color: "grey",
                marginLeft: "10px",
                cursor: "pointer",
                userSelect: "none",
              }}>
              {user.customer_name}
            </p>
            <LogoutIcon
              onClick={logoutAction}
              style={{
                marginLeft: "10px",
                fontSize: "1.3rem",
                marginBottom: "3px",
                cursor: "pointer",
              }}
            />
          </>
        ) : (
          <div class="login-button" onClick={openModal}>
            Login
          </div>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ user: state.user.user });
const mapDispatchToProps = { logoutAction };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
