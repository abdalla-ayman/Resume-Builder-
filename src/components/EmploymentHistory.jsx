import { useState } from "react";
import addSrc from "../assets/add.svg";

function EmploymentHistory() {
  const [employemntHis, setEmploymentHis] = useState([]);
  return (
    <section>
      <h3 className="my-4">Employment History :</h3>
      {employemntHis.map((emHis) => (
        <div className="card accordion-item">
           <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
          <div className="accordion-body accordion-collapse collapse show" id="collapseOne"
              aria-labelledby="headingOne">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="mb-3 mx-2 w-100 input-div">
              <label htmlFor="em-job-title" className="form-label">
                Job Title
              </label>
              <input type="text" className="form-control" id="em-job-title" />
            </div>
            <div className="mb-3 mx-2 w-100 input-div ">
              <label htmlFor="employer" className="form-label">
                Employer
              </label>
              <input className="form-control" type="text" id="employer" />
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="mb-3 mx-2 w-100 input-div">
              <label htmlFor="em-start-date" className="form-label">
                start & end Date
              </label>
              <div className="d-flex">
                <input
                  type="date"
                  className="form-control"
                  id="em-start-date"
                />
                <input type="date" className="form-control" id="em-end-date" />
              </div>
            </div>
            <div className="mb-3 mx-2 w-100 input-div">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="city" />
            </div>
          </div>
          <div className="mb-3 mx-2 w-100">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <div className="w-100 text-area-div d-flex justify-content-center">
              <textarea className="form-control" id="description"></textarea>
            </div>
          </div>
          </div>
        </div>
      ))}
      <p
        className="text-center add-more-btn text-primary"
        onClick={() => setEmploymentHis([...employemntHis, 1])}
      >
        Add To Employment History{" "}
        <img src={addSrc} width="32" height="32" alt="" />
      </p>
    </section>
  );
}

export default EmploymentHistory;
