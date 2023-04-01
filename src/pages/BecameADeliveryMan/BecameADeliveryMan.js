import React, { useState } from "react";
import { Link } from "react-router-dom";

const BecameADeliveryMan = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div className="sm-width mx-auto my-4 px-3">
      <h3 className="text-center py-3">Became A Delivery Man</h3>
      <form className="row g-4 needs-validation" >
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Enter your first name"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="form-control"
            id="validationCustom02"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomUsername" className="form-label">
            Email / Phone
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              placeholder="Enter your Email or Phone number"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a email.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="Enter your city"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom04" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom04"
            placeholder="Enter your street address"
            required
          />
          <div className="invalid-feedback">Please provide a valid street city.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom05" className="form-label">
            Picture URL
          </label>
          <input
            type="file"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom05" className="form-label">
            Delivery Option
          </label>
          <select name="option" id="option" className="form-control">
            <option value="select">Select Option</option>
            <option value="bike">Bike</option>
            <option value="cycle">Cycle</option>
          </select>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={() => setDisabled(!disabled)}
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" disabled={disabled} type="submit">
            Submit
          </button>
          <Link to="/" className="btn-link btn">Back</Link>
        </div>
      </form>
    </div>
  );
};

export default BecameADeliveryMan;
