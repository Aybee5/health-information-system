import React, { useState } from "react";
import Input from "../UI/Input";
import classes from "./Registration.module.css";
import Logo from "../../assets/images/logow.png";

const PatientReg = props => {
  return (
    <div className={classes.container} style={{ marginTop: "50px" }}>
      <h3 className={classes["page-label"]}>{props.role}</h3>

      <div className={classes["flex-wrapper"]}>
        <div className={classes["reg-wrapper"]}>
          <a href="#">
            <img src={Logo} alt="logo" width="80px" />
          </a>

          <h2>{props.role}</h2>
          <form action="#" method="POST">
            <Input
              type="text"
              placeholder="First name"
              name="fName"
              title="First name"
              className={classes["input-label"]}
            />

            <Input
              type="text"
              placeholder="Last name"
              name="lName"
              title="last name"
              className={classes["input-label"]}
            />

            <Input
              type="date"
              placeholder="Date of birth"
              name="dob"
              title="Date of birth"
              className={classes["input-label"]}
            />

            <Input
              type="text"
              placeholder="Phone number"
              name="phoneNumber"
              title="Phone number"
              className={classes["input-label"]}
            />

            <Input
              type="text"
              placeholder="Residential address"
              name="address"
              title="Residential address"
              className={classes["input-label-full"]}
            />

            <Input
              type="email"
              placeholder="Email address"
              name="email"
              title="Email address"
              className={classes["input-label"]}
            />

            <fieldset className={classes["input-label"]}>
              <legend>State</legend>
              <select name="state">
                <option value="null">...Select state...</option>
                <option value="Abuja">Abuja</option>
                <option value="Kano">Kano</option>
                <option value="Edo">Edo</option>
                <option value="Kaduna">Kaduna</option>
              </select>
            </fieldset>
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              title="Confirm password"
              className={classes["input-label"]}
            />

            <Input
              type="password"
              placeholder="Password"
              name="password"
              title="Password"
              className={classes["input-label"]}
            />

            <div className={classes["form-bottom"]}>
              <a className={classes.forget} href="#">
                Already have an account
              </a>
              <input type="submit" value={props.role} name="patient_reg" />
            </div>
          </form>

          <span className={classes["copy-right"]}>
            health information system, Nigeria - Copyright &copy; 2020
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientReg;