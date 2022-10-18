import React from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const SingleMember = ({
  memberData,
  deleteMember,
  editMember,
  index,
  setNumber,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{memberData?.name}</td>
      <td>{memberData?.role}</td>
      <td>{memberData?.age}</td>
      <td>{memberData?.hall_name}</td>
      <td>
        <button
          style={{ border: "none" }}
          data-bs-toggle="modal"
          data-bs-target={`#studentDataEdit${memberData.id}`}
        >
          <FaRegEdit />
        </button>
        |
        <button
          style={{ border: "none" }}
          data-bs-toggle="modal"
          data-bs-target={`#studentDataDelete${index + 1}`}
        >
          <AiFillDelete />
        </button>
      </td>
      <div
        className="modal fade text-start"
        id={`studentDataEdit${memberData.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT - {memberData.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit(editMember)}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    defaultValue={memberData.name}
                    {...register("name")}
                    name="name"
                    id="name"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="roll">Roll</label>
                  <input
                    type="text"
                    defaultValue={memberData.role}
                    {...register("roll")}
                    name="roll"
                    id="roll"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    defaultValue={memberData.age}
                    {...register("age")}
                    name="age"
                    id="age"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="hall_name">Hall Name</label>
                  <input
                    type="text"
                    defaultValue={memberData.hall_name}
                    {...register("hall_name")}
                    name="hall_name"
                    id="hall_name"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <input
                  type="id"
                  defaultValue={memberData.id}
                  {...register("id")}
                  name="id"
                  id="id"
                  hidden
                />

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                    value="Save Changes"
                    data-bs-dismiss="modal"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`studentDataDelete${index + 1}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                DELETE - {memberData?.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you want to delete this?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => deleteMember(memberData.id)}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </tr>
  );
};

export default SingleMember;
