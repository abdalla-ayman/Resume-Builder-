import { useState } from "react";
function ProfessionalSummary(props) {
  const { summary, setSummary } = props;
  return (
    <section>
      <h3 className="my-4">Professional Summary : </h3>
      <div className="w-100 text-area-div d-flex justify-content-center ">
        <textarea
          className="form-control"
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
      </div>
    </section>
  );
}

export default ProfessionalSummary;
