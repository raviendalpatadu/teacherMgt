import React from "react";
import "./index.css";
import profileImg from "./../../../../assets/images/avatar1.png";

function NavbarPrincipal() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Teacher Management System</span>

          <div className="d-flex">
            <div className="d-flex align-self-center me-5">
              <div className="mx-2">Students</div>
              <div className="mx-2">Teachers</div>
            </div>

            <div className="d-flex me-4">
              {/* image */}
              <div className="navbar_profile_img flex-column align-self-center">
                <img src={profileImg} alt="profile" />
              </div>
              {/* text */}
              <div className="  flex-column">
                <div className="fw-medium ">Ravien</div>
                <div className="fw-light">Principal</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavbarPrincipal;
