import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AddMember from "./addMember";
import ManageMember from "./manageMember";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Home = () => {
  let location = useLocation();
  const path = location.pathname;
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row my-3">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            {path === "/dashboard" ? (
              <h1 className="text-center mt-5 pt-5">
                Welcome to Classic Hostel
              </h1>
            ) : (
              ""
            )}
            <Routes>
              <Route path="add-member" element={<AddMember />} />
              <Route path="manage-member" element={<ManageMember />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
