import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import addSrc from "../assets/add.svg";
import trashSrc from "../assets/trash.svg";
function SocialLinks(props) {
  const { links, setLinks } = props;
  const handleChange = (e, id) => {
    const name = e.target.name;
    setLinks([
      ...links.map((link) => {
        if (link.id == id) {
          return {
            ...link,
            [name]: e.target.value,
          };
        } else {
          return link;
        }
      }),
    ]);
  };
  return (
    <section>
      <h3 className="my-4">Websites and Social Links : </h3>
      {links.map((link) => (
        <div className="card accordion-item" key={link.id}>
          <h2 className="accordion-header d-flex" id={"headingOne" + link.id}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseOne" + link.id}
              aria-expanded="true"
              aria-controls={"collapseOne" + link.id}
            >
              {link.label || link.link ? (
                <div className="d-flex flex-column">
                  <p className="mb-1">{link.label ? link.label : " "}</p>

                  <p className="small m-0 text-secondary">
                    {link.link ? link.link : " "}
                  </p>
                </div>
              ) : (
                "(Not specified)"
              )}
            </button>
            <button
              type="button"
              className="de-btn"
              onClick={() => {
                setLinks([...links.filter((lnk) => lnk.id != link.id)]);
              }}
            >
              <img src={trashSrc} alt="" width={32} height={16} />
            </button>
          </h2>
          <div
            className="accordion-body accordion-collapse collapse show"
            id={"collapseOne" + link.id}
            aria-labelledby="headingOne"
          >
            <div className="d-flex flex-column flex-md-row justify-content-center">
              <div className="mb-3 mx-2 w-100 input-div">
                <label htmlFor={"label" + link.id} className="form-label">
                  Label
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={"label" + link.id}
                  name="label"
                  onChange={(e) => handleChange(e, link.id)}
                  value={link.label}
                />
              </div>
              <div className="mb-3 mx-2 w-100 input-div ">
                <label htmlFor={"link" + link.id} className="form-label">
                  Link
                </label>
                <input
                  className="form-control"
                  type="text"
                  id={"link" + link.id}
                  name="link"
                  onChange={(e) => handleChange(e, link.id)}
                  value={link.link}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <p
        className="text-center d-flex justify-content-between add-more-btn text-primary"
        onClick={() => {
          setLinks([
            ...links,
            {
              id: uuidv4(),
              label: "",
              link: "",
            },
          ]);
        }}
      >
        <span>Add To Links</span>
        <img src={addSrc} width="32" height="32" alt="" />
      </p>
    </section>
  );
}

export default SocialLinks;
