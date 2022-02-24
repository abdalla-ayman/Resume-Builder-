import { useState } from "react";
import addSrc from "../assets/add.svg";
function SocialLinks() {
  const [links, setLinks] = useState([]);
  return (
    <section>
      <h3 className="my-4">Websites and Social Links : </h3>
      {links.map((link) => (
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
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="mb-3 mx-2 w-100 input-div">
              <label htmlFor="label" className="form-label">
                Label
              </label>
              <input type="text" className="form-control" id="label" />
            </div>
            <div className="mb-3 mx-2 w-100 input-div ">
              <label htmlFor="link" className="form-label">
                Link{" "}
              </label>
              <input className="form-control" type="text" id="link" />
            </div>
          </div>
        </div>
        </div>
      ))}
      <p
        className="text-center add-more-btn text-primary"
        onClick={() => setLinks([...links, 1])}
      >
        Add To Links <img src={addSrc} width="32" height="32" alt="" />
      </p>
    </section>
  );
}

export default SocialLinks;
