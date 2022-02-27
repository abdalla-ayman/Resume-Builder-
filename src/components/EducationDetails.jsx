import { useState } from "react";
import addSrc from "../assets/add.svg";
import { v4 as uuidv4 } from "uuid";
import trashSrc from "../assets/trash.svg";

function EducationDetails() {
  const [Education, setEducation] = useState([]);

  const handleChange = (e, id) => {
    const name = e.target.name;
    console.log(e.target.value, e.target.name);
    setEducation([
      ...Education.map((ed) => {
        if (ed.id == id) {
          return {
            ...ed,
            [name]: e.target.value,
          };
        } else {
          return ed;
        }
      }),
    ]);
  };
  return (
    <section>
      <h3 className="my-4">Education : </h3>
      {Education.map((ed) => (
        <div className="card accordion-item" key={ed.id}>
          <h2 className="accordion-header d-flex" id={"headingOne" + ed.id}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseOne" + ed.id}
              aria-expanded="true"
              aria-controls={"collapseOne" + ed.id}
            >
              {ed.school || ed.degree
                ? `${ed.degree || " "} ${ed.school && ed.degree ? "at" : ""} ${
                    ed.school || " "
                  }`
                : "(Not specified)"}
            </button>
            <button
              type="button"
              className="de-btn"
              onClick={() => {
                setEducation([...Education.filter((lnk) => lnk.id != ed.id)]);
              }}
            >
              <img src={trashSrc} alt="" width={32} height={16} />
            </button>
          </h2>
          <div
            className="accordion-body accordion-collapse collapse show"
            id={"collapseOne" + ed.id}
            aria-labelledby="headingOne"
          >
            <div className="d-flex flex-column flex-md-row justify-content-center">
              <div className="mb-3 mx-2 w-100 input-div">
                <label htmlFor={"school" + ed.id} className="form-label">
                  School
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={"school" + ed.id}
                  name="school"
                  onChange={(e) => handleChange(e, ed.id)}
                  value={ed.school}
                />
              </div>
              <div className="mb-3 mx-2 w-100 input-div ">
                <label htmlFor={"degree" + ed.id} className="form-label">
                  Degree
                </label>
                <input
                  className="form-control"
                  type="text"
                  id={"degree" + ed.id}
                  name="degree"
                  onChange={(e) => handleChange(e, ed.id)}
                  value={ed.degree}
                />
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center">
              <div className="mb-3 mx-2 w-100 input-div">
                <label htmlFor={"ed-start-date" + ed.id} className="form-label">
                  start & end Date
                </label>
                <div className="d-flex">
                  <input
                    type="date"
                    className="form-control"
                    id={"ed-start-date" + ed.id}
                    name="startDate"
                    onChange={(e) => handleChange(e, ed.id)}
                    value={ed.startDate}
                  />
                  <input
                    type="date"
                    className="form-control"
                    id={"ed-end-date" + ed.id}
                    name="endDate"
                    onChange={(e) => handleChange(e, ed.id)}
                    value={ed.endDate}
                  />
                </div>
              </div>
              <div className="mb-3 mx-2 w-100 input-div">
                <label htmlFor={"ed-city" + ed.id} className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={"ed-city" + ed.id}
                  name="city"
                  onChange={(e) => handleChange(e, ed.id)}
                  value={ed.city}
                />
              </div>
            </div>
            <div className="mb-3 mx-2 w-100">
              <label htmlFor={"ed-description" + ed.id} className="form-label">
                Description
              </label>
              <div className="w-100 text-area-div d-flex justify-content-center">
                <textarea
                  className="form-control"
                  id={"ed-description" + ed.id}
                  name="description"
                  onChange={(e) => handleChange(e, ed.id)}
                  value={ed.description}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p
        className="text-center add-more-btn text-primary"
        onClick={() => {
          setEducation([
            ...Education,
            {
              id: uuidv4(),
              school: "",
              degree: "",
              startDate: new Date().toISOString().split("T")[0],
              endDate: new Date().toISOString().split("T")[0],
              city: "",
              description: "",
            },
          ]);
        }}
      >
        Add To Education <img src={addSrc} width="32" height="32" alt="" />
      </p>
    </section>
  );
}

export default EducationDetails;
