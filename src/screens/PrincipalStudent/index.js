import React from "react";
import "./index.css";
import NavbarPrincipal from "./subComponents/NavbarPrincipal";
import Table from "./subComponents/Table";

function principalStudent() {
  return (
        <>
        <NavbarPrincipal />
        <div className="container d-flex justify-content-center align-items-center">
            <div className=" ">
            <Table />
            </div>
        </div>
        </>
  );
}

export default principalStudent;