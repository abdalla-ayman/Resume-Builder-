import { useState } from "react";

function PersonalDetails(props) {
  const { personalDetails, setPersonalDetails } = props;

  const handleChange = (e) => {
    const name = e.target.name;
    if (name == "photo") {
      setPersonalDetails({ ...personalDetails, photo: e.target.files[0] });
    } else {
      setPersonalDetails({ ...personalDetails, [name]: e.target.value });
    }
  };

  return (
    <section>
      <h3 className="my-4">Personal Details : </h3>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="job-title" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={personalDetails.jobTitle}
            className="form-control"
            id="job-title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mx-2 w-100 input-div ">
          <label for="photo" className="form-label">
            Upload Photo
          </label>
          <input
            className="form-control"
            accept="image/*"
            name="photo"
            value={personalDetails.Photo}
            type="file"
            id="photo"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={personalDetails.firstName}
            className="form-control"
            id="first-name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="last-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={personalDetails.lastName}
            id="last-name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={personalDetails.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="phone-number" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            value={personalDetails.phoneNumber}
            name="phoneNumber"
            className="form-control"
            id="phone-number"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            value={personalDetails.country}
            name="country"
            className="form-control"
            id="country"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="p-e-city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="p-e-city"
            name="city"
            value={personalDetails.city}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={personalDetails.address}
            name="address"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mx-2 w-100 input-div">
          <label for="postal-code" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={personalDetails.postalCode}
            className="form-control"
            id="postal-code"
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
}

export default PersonalDetails;
