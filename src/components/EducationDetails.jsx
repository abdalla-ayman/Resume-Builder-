import { useState } from "react";
import addSrc from "../assets/add.svg";
function EducationDetails() {
  const [Education, setEducation] = useState([]);
  return (
    <section>
      <h3 className="my-4">Education : </h3>
      {Education.map((ed) => (
        <div className="card">
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="mb-3 mx-2 w-100 input-div">
              <label htmlFor="school" className="form-label">
                School
              </label>
              <input type="text" className="form-control" id="school" />
            </div>
            <div className="mb-3 mx-2 w-100 input-div ">
              <label htmlFor="degree" className="form-label">
                Degree
              </label>
              <input className="form-control" type="text" id="degree" />
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="mb-3 mx-2 w-100 input-div">
              <label htmlFor="ed-start-date" className="form-label">
                start & end Date
              </label>
              <div className="d-flex">
                <input
                  type="date"
                  className="form-control"
                  id="ed-start-date"
                />
                <input type="date" className="form-control" id="ed-end-date" />
              </div>
            </div>
            <div className="mb-3 mx-2 w-100 input-div">
              <label htmlFor="ed-city" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="ed-city" />
            </div>
          </div>
          <div className="mb-3 mx-2 w-100">
            <label htmlFor="ed-description" className="form-label">
              Description
            </label>
            <div className="w-100 text-area-div d-flex justify-content-center">
              <textarea className="form-control" id="ed-description"></textarea>
            </div>
          </div>
        </div>
      ))}
      <p
        className="text-center add-more-btn text-primary"
        onClick={() => setEducation([...Education, 1])}
      >
        Add To Education <img src={addSrc} width="32" height="32" alt="" />
      </p>
    </section>
  );
}

export default EducationDetails;
