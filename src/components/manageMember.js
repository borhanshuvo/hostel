import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../App";
import SingleMember from "./singleMember";

const ManageMember = () => {
  const headingColor = { color: "#3A4256" };
  const [showSpinner, setShowSpinner] = useState(false);
  const [membersData, setMembersData] = useState([]);
  const [number, setNumber] = useState(0);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    setShowSpinner(true);
    fetch("https://test.flexflix.io/api/member-all", {
      method: "GET",
      headers: {
        authorization: `Bearer ${loggedInUser?.token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setMembersData(result.member);
        setShowSpinner(false);
      });
  }, [number]);

  const editMember = (data) => {
    fetch(`https://test.flexflix.io/api/member-update/${data.id}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${loggedInUser?.token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        role: data.roll,
        age: data.age,
        hall_name: data.hall_name,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully edited!!!");
        setNumber((prevState) => prevState + 1);
      });
  };

  const deleteMember = (id) => {
    fetch(`https://test.flexflix.io/api/member-delete/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${loggedInUser?.token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully deleted!!!");
        const newMembersData = membersData.filter(
          (studentData) => studentData.id !== id
        );
        setMembersData(newMembersData);
        setNumber((prevState) => prevState + 1);
      });
  };

  return (
    <div>
      <h4 className="pt-3 pb-5 ps-3" style={headingColor}>
        Manage Member
      </h4>
      <div className="container">
        <div className="table-responsive">
          <table className="table text-center table-responsive border">
            <thead>
              <tr>
                <th scope="col">#Sl</th>
                <th scope="col">Name</th>
                <th scope="col">Roll</th>
                <th scope="col">Age</th>
                <th scope="col">Hall Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {showSpinner ? (
                <tr>
                  <td colSpan={9}>
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}
              {membersData.map((data, index) => (
                <SingleMember
                  key={data?.id}
                  memberData={data}
                  deleteMember={deleteMember}
                  editMember={editMember}
                  index={index}
                  setNumber={setNumber}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMember;
