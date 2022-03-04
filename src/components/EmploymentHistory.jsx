import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import addSrc from "../assets/add.svg";
import trashSrc from "../assets/trash.svg";

function EmploymentHistory(props) {
  const { employemntHis, setEmploymentHis } = props;

  const handleChange = (e, id) => {
    const name = e.target.name;
    setEmploymentHis([
      ...employemntHis.map((em) => {
        if (em.id == id) {
          return {
            ...em,
            [name]: e.target.value,
          };
        } else {
          return em;
        }
      }),
    ]);
  };
  return (
    <section>
      <h3 className="my-4">Employment History :</h3>
      {employemntHis.map((emHis) => (
        <div className="card accordion-item" key={emHis.id}>
          <h2 className="accordion-header d-flex" id={"headingOne" + emHis.id}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseOne" + emHis.id}
              aria-expanded="true"
              aria-controls={"collapseOne" + emHis.id}
            >
              {emHis.jobTitle || emHis.employer
                ? `${emHis.jobTitle || " "} ${emHis.employer ? "at" : ""} ${
                    emHis.employer || " "
                  }`
                : "(Not specified)"}
            </button>
            <button
              type="button"
              className="de-btn"
              onClick={() => {
                setEmploymentHis([
                  ...employemntHis.filter((lnk) => lnk.id != emHis.id),
                ]);
              }}
            >
              <img src={trashSrc} alt="" width={32} height={16} />
            </button>
          </h2>
          <div
            className="accordion-body accordion-collapse collapse show"
            id={"collapseOne" + emHis.id}
            aria-labelledby="headingOne"
          >
            <div className="d-flex flex-column flex-md-row justify-content-center ">
              <div className="mb-3 mx-2 w-100 input-div">
                <label
                  htmlFor={"em-job-title" + emHis.id}
                  className="form-label"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={"em-job-title" + emHis.id}
                  name="jobTitle"
                  onChange={(e) => handleChange(e, emHis.id)}
                  value={emHis.jobTitle}
                />
              </div>
              <div className="mb-3 mx-2 w-100 input-div ">
                <label htmlFor={"employer" + emHis.id} className="form-label">
                  Employer
                </label>
                <input
                  className="form-control"
                  type="text"
                  id={"employer" + emHis}
                  name="employer"
                  onChange={(e) => handleChange(e, emHis.id)}
                  value={emHis.employer}
                />
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center">
              <div className="mb-3 mx-2 w-100 input-div">
                <label
                  htmlFor={"em-start-date" + emHis.id}
                  className="form-label"
                >
                  start & end Date
                </label>
                <div className="d-flex">
                  <input
                    type="month"
                    className="form-control"
                    id={"em-start-date" + emHis.id}
                    name="startDate"
                    onChange={(e) => handleChange(e, emHis.id)}
                    value={emHis.startDate}
                  />
                  <input
                    type="month"
                    className="form-control"
                    id="em-end-date"
                    name="endDate"
                    onChange={(e) => handleChange(e, emHis.id)}
                    value={emHis.endDate}
                  />
                </div>
              </div>
              <div className="mb-3 mx-2 w-100 input-div">
                <label htmlFor={"city" + emHis.id} className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={"city" + emHis.id}
                  name="city"
                  onChange={(e) => handleChange(e, emHis.id)}
                  value={emHis.city}
                />
              </div>
            </div>
            <div className="mb-3 mx-2 w-100">
              <label htmlFor={"description" + emHis.id} className="form-label">
                Description
              </label>
              <div className="w-100 text-area-div d-flex justify-content-center">
                <textarea
                  className="form-control"
                  id={"description" + emHis.id}
                  name="description"
                  onChange={(e) => handleChange(e, emHis.id)}
                  value={emHis.description}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p
        className="text-center d-flex justify-content-between add-more-btn text-primary"
        onClick={() => {
          setEmploymentHis([
            ...employemntHis,
            {
              id: uuidv4(),
              jobTitle: "",
              employer: "",
              startDate: "",
              endDate: "",
              city: "",
              description: "",
            },
          ]);
        }}
      >
        <span>Add To Employment History </span>
        <img src={addSrc} width="32" height="32" alt="" />
      </p>
    </section>
  );
}

export default EmploymentHistory;
