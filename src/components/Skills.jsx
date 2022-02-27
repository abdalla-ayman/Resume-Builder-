import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import addSrc from "../assets/add.svg";
import trashSrc from "../assets/trash.svg";

function Skills() {
  const [skills, setSkills] = useState([]);
  const skillLvls = {
    1: "Novice",
    2: "Beginner",
    3: "Skillful",
    4: "Experienced",
    5: "Expert",
  };

  const handleChange = (e, id) => {
    const name = e.target.name;
    setSkills([
      ...skills.map((skill) => {
        if (skill.id == id) {
          return {
            ...skill,
            [name]: e.target.value,
          };
        } else {
          return skill;
        }
      }),
    ]);
  };
  return (
    <section>
      <h3 className="my-4">Skills : </h3>
      {skills.map((skill) => (
        <div className="card accordion-item" key={skill.id}>
          <h2 className="accordion-header d-flex" id={"headingOne" + skill.id}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseOne" + skill.id}
              aria-expanded="true"
              aria-controls={"collapseOne" + skill.id}
            >
              {skill.lvl || skill.skill ? (
                <div className="d-flex flex-column">
                  <p className="mb-1">{skill.skill ? skill.skill : " "}</p>

                  <p className="small m-0 text-secondary">
                    {skill.lvl ? skillLvls[skill.lvl] : " "}
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
                setSkills([...skills.filter((lnk) => lnk.id != skill.id)]);
              }}
            >
              <img src={trashSrc} alt="" width={32} height={16} />
            </button>
          </h2>
          <div
            className="accordion-body accordion-collapse collapse show"
            id={"collapseOne" + skill.id}
            aria-labelledby="headingOne"
          >
            <div className="d-flex flex-column flex-md-row justify-content-center">
              <div className="mb-3 mx-2 w-100 input-div">
                <label htmlFor={"label" + skill.id} className="form-label">
                  Skill
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={"label" + skill.id}
                  name="skill"
                  value={skill.skill}
                  onChange={(e) => handleChange(e, skill.id)}
                />
              </div>
              <div className="mb-3 mx-2 w-100 input-div ">
                <label htmlFor={"skill-lvl" + skill.id} className="form-label">
                  level - {skillLvls[skill.lvl]}
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="1"
                  max="5"
                  id={"skill-lvl" + skill.id}
                  value={skill.lvl}
                  name="lvl"
                  onChange={(e) => handleChange(e, skill.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <p
        className="text-center add-more-btn text-primary"
        onClick={() => {
          setSkills([
            ...skills,
            {
              id: uuidv4(),
              skill: "",
              lvl: 0,
            },
          ]);
        }}
      >
        Add To Skills <img src={addSrc} width="32" height="32" alt="" />
      </p>
    </section>
  );
}

export default Skills;
