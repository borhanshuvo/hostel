import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMember from "./addMember";
import ManageMember from "./manageMember";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row my-3">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
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
