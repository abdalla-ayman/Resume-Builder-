import EmploymentHistorySection from "../components/EmploymentHistory";
import PersonalDetailsSection from "../components/PersonalDetails";
import ProfessionalSummarySection from "../components/ProfessionalSummary";
import EducationDetailsSection from "../components/EducationDetails";
import SocialLinksSection from "../components/SocialLinks";
import SkillsSection from "../components/Skills";
import PDFfile from "../components/PDFfile";
import { useState } from "react";

function ResumeBuilder() {
  const [personalDetails, setPersonalDetails] = useState({
    jobTitle: "",
    Photo: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
  });
  const [summary, setSummary] = useState("");
  const [employemntHis, setEmploymentHis] = useState([]);
  const [Education, setEducation] = useState([]);
  const [links, setLinks] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ResumeBuilder page ">
      <div className="container mt-4">
        <h1 className="text-center">Resume Builder</h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <PersonalDetailsSection
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
          <ProfessionalSummarySection
            summary={summary}
            setSummary={setSummary}
          />
          <EmploymentHistorySection
            employemntHis={employemntHis}
            setEmploymentHis={setEmploymentHis}
          />
          <EducationDetailsSection
            Education={Education}
            setEducation={setEducation}
          />
          <SocialLinksSection links={links} setLinks={setLinks} />
          <SkillsSection skills={skills} setSkills={setSkills} />
          <div className="w-100 mt-5 d-flex justify-content-center">
            <button type="submit" className="btn btn-success btn-lg">
              Build Your Resume
            </button>
          </div>
        </form>
        <PDFfile
          state={{
            personalDetails,
            summary,
            employemntHis,
            Education,
            skills,
            links,
          }}
        />
      </div>
    </div>
  );
}

export default ResumeBuilder;
