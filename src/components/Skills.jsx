import { useState } from "react";
import addSrc from "../assets/add.svg";

function Skills() {
  const [skills, setSkills] = useState([]);
  const skillLvls = {
    1: "Novice",
    2: "Beginner",
    3: "Skillful",
    4: "Experienced",
    5: "expert",
  };
  return (
    <section>
      <h3 className="my-4">Skills : </h3>
      {skills.map((skill) => (
        <div className="card">
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="mb-3 mx-2 w-100 input-div">
              <label htmlFor="label" className="form-label">
                Skill
              </label>
              <input type="text" className="form-control" id="label" />
            </div>
            <div className="mb-3 mx-2 w-100 input-div ">
              <label htmlFor="skill-lvl" className="form-label">
                level - {skillLvls[skill.lvl]}
              </label>
              <input
                type="range"
                className="form-range"
                min="1"
                max="5"
                id="skill-lvl"
                value={skill.lvl}
              />
            </div>
          </div>
        </div>
      ))}
      <p
        className="text-center add-more-btn text-primary"
        onClick={() => setSkills([...skills, { lvl: 1 }])}
      >
        Add To Skills <img src={addSrc} width="32" height="32" alt="" />
      </p>
    </section>
  );
}

export default Skills;
