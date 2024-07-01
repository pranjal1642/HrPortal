import { useState } from "react";
import {
  convertDateToEpoch,
  getCurrentDate,
  onKeyDown,
} from "../../helpers/helper";
import "./employee.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import RolesList from "../Roles/RolesList";
import { addEmployee } from "../../apiServices/apiFetch";
import CommonModal from "../common/CommonModal";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNumber: string;
  dob: string;
  address: string;
  designation: string;
  reportingManager: string;
  doj: string;
  employeeCode: number;
}

export default function Employee() {
  const [showModal, setShowModal] = useState(false);
  const [empRole, setEmpRole] = useState<any>();
  const handleClose = () => {
    setShowModal(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      const payload: any = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        password: data?.password,
        contactNumber: data?.contactNumber,
        dob: convertDateToEpoch(data?.dob),
        address: data?.address,
        designation: data?.designation,
        reportingManager: data?.reportingManager,
        doj: convertDateToEpoch(data?.doj),
        userName: "Admin",
      };
      const res = await addEmployee(payload);
      //   if (res) {
      //     navigate("/");
      //   }
      //   console.log(res, "SIGNUP");
    } catch (error) {
      console.error(error, "error In Register");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="employee-form">
        <ul>
          <li>
            <label>First Name</label>
            <input
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name is required",
                },
                minLength: {
                  value: 3,
                  message: "First Name must be at least 3 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "First Name cannot exceed 20 characters",
                },
              })}
              type="text"
              placeholder="Enter First Name"
            />
            {errors.firstName && (
              <span className="error-msg">{errors.firstName.message}</span>
            )}
          </li>
          <li>
            <label>Last Name</label>
            <input
              type="text"
              {...register("lastName", {
                required: "Last Name is required",
                maxLength: {
                  value: 20,
                  message: "Last Name cannot exceed 20 characters",
                },
              })}
              placeholder="Enter Last Name"
            />
            {errors.lastName && (
              <span className="error-msg">{errors.lastName.message}</span>
            )}
          </li>
          <li>
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address",
                },
              })}
              placeholder="Enter Email"
              type="email"
            />
            {errors.email && (
              <span className="error-msg">{errors.email.message}</span>
            )}
          </li>
          <li>
            <label>Password</label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              placeholder="Enter password"
            />
            {errors.password && (
              <span className="error-msg">
                Password must be at least 6 characters
              </span>
            )}
          </li>
          <li>
            <label>Contact Number</label>
            <input
              type="number"
              className="no-spinner"
              {...register("contactNumber", {
                required: "Contact Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Contact Number must be exactly 10 digits",
                },
              })}
              onKeyDown={onKeyDown}
              placeholder="Contact Number"
            />
            {errors.contactNumber && (
              <span className="error-msg">{errors.contactNumber.message}</span>
            )}
          </li>
          <li>
            <label>DOB</label>
            <input
              {...register("dob", { required: "Please select a Date" })}
              type="date"
              placeholder="Date of Birth"
              className="form-control date-input"
              max={getCurrentDate()}
            />
            {errors.dob && (
              <span className="error-msg">{errors.dob.message}</span>
            )}
          </li>
          <li>
            <label>Address</label>
            <input
              {...register("address", {
                required: "Address is required",
                minLength: {
                  value: 6,
                  message: "Address must be at least 6 characters",
                },
              })}
              type="text"
              placeholder="Enter Address"
            />
            {errors.address && (
              <span className="error-msg">{errors.address.message}</span>
            )}
          </li>
          <li>
            <label>Designation</label>
            <input
              {...register("designation", {
                required: "Designation is required",
              })}
              type="text"
              placeholder="Enter Designation"
              onClick={() => setShowModal(true)}
              value={empRole?.positionName}
            />
            {errors.designation && (
              <span className="error-msg">{errors.designation.message}</span>
            )}
          </li>
          <li>
            <label>Reporting Manager</label>
            <input
              {...register("reportingManager", {
                required: "Reporting Manager is required",
                minLength: {
                  value: 6,
                  message: "Reporting Manager must be at least 6 characters",
                },
              })}
              type="text"
              placeholder="Enter Reporting Manager"
            />
            {errors.reportingManager && (
              <span className="error-msg">
                {errors.reportingManager.message}
              </span>
            )}
          </li>
          <li>
            <label>DOJ</label>
            <input
              {...register("doj", {
                required: "Please select a Date of Joining",
              })}
              type="date"
              placeholder="Date of Joining"
              className="form-control date-input"
              max={getCurrentDate()}
            />
            {errors.doj && (
              <span className="error-msg">{errors.doj.message}</span>
            )}
          </li>
          <li>
            <label>Employee Code</label>
            <input
              {...register("employeeCode", {
                required: "Employee Code is required",
                minLength: {
                  value: 1,
                  message: "Employee Code must be at least 1 characters",
                },
              })}
              type="text"
              placeholder="Employee Code"
            />
            {errors.employeeCode && (
              <span className="error-msg">{errors.employeeCode.message}</span>
            )}
          </li>
        </ul>
        <input type="submit" value="Sign Up" />
      </form>
      <CommonModal
        showModal={showModal}
        modalBody={
          <RolesList setEmpRole={setEmpRole} handleClose={handleClose} />
        }
        modalTitle="Roles List"
      />
    </>
  );
}
