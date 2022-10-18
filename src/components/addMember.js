import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../App";

const AddMember = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const headingColor = { color: "#3A4256" };
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const onSubmit = (data, e) => {
    fetch("https://test.flexflix.io/api/member-store", {
      method: "POST",
      headers: {
        authorization: `Bearer ${loggedInUser?.token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        role: data.roll,
        hall_name: data.hall_name,
        age: data.age,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully added!!!");
        e.target.reset();
      });
  };
  return (
    <div className="ps-3">
      <h4 className="ps-2 pt-3 pb-5" style={headingColor}>
        Add Member
      </h4>
      <div className="card make-admin-card-style">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group pb-3">
              <label htmlFor="name" className="pb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", { required: true })}
                id="name"
                className="form-control"
              />
              {errors.name && (
                <span role="alert" className="text-danger">
                  {" "}
                  This field is required{" "}
                </span>
              )}
            </div>
            <div className="form-group pb-3">
              <label htmlFor="roll" className="pb-2">
                Roll
              </label>
              <input
                type="text"
                name="roll"
                placeholder="Enter Roll"
                aria-invalid={errors.roll ? "true" : "false"}
                {...register("roll", { required: true })}
                id="roll"
                className="form-control"
              />
              {errors.roll && (
                <span role="alert" className="text-danger">
                  {" "}
                  This field is required{" "}
                </span>
              )}
            </div>
            <div className="form-group pb-3">
              <label htmlFor="age" className="pb-2">
                Age
              </label>
              <input
                type="text"
                name="age"
                placeholder="Enter Age"
                aria-invalid={errors.age ? "true" : "false"}
                {...register("age", { required: true })}
                id="age"
                className="form-control"
              />
              {errors.age && (
                <span role="alert" className="text-danger">
                  {" "}
                  This field is required{" "}
                </span>
              )}
            </div>

            <div className="form-group pb-3">
              <label htmlFor="hall_name" className="pb-2">
                Hall Name
              </label>
              <input
                type="text"
                name="hall_name"
                placeholder="Enter Hall Name"
                aria-invalid={errors.hall_name ? "true" : "false"}
                {...register("hall_name", { required: true })}
                id="hall_name"
                className="form-control"
              />
              {errors.hall_name && (
                <span role="alert" className="text-danger">
                  {" "}
                  This field is required{" "}
                </span>
              )}
            </div>
            <div className="form-group pb-3">
              <input type="submit" name="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
