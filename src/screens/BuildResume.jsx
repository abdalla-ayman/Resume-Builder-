import EmploymentHistorySection from "../components/EmploymentHistory";
import PersonalDetailsSection from "../components/PersonalDetails";
import ProfessionalSummarySection from "../components/ProfessionalSummary";
import EducationDetailsSection from "../components/EducationDetails";
import SocialLinksSection from "../components/SocialLinks";
import SkillsSection from "../components/Skills";
import PDFfile from "../components/PDFfile";
import { useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function ResumeBuilder() {
  const [personalDetails, setPersonalDetails] = useState({
    jobTitle: "",
    photo: "",
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
  const [displayPdf, setDisplayPdf] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ResumeBuilder page position-relative">
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
          <div className="w-100 mt-5 d-flex flex-column align-items-end justify-content-center floating">
            <button
              type="button"
              className="btn btn-primary btn-lg d-pdf but"
              onClick={() => setDisplayPdf(!displayPdf)}
            >
              {displayPdf ? "Go Back" : "Preview Your Cv"}
            </button>
            <button type="submit" className="btn btn-success btn-lg d-pdf but">
              <PDFDownloadLink
                style={{ color: "white" }}
                document={
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
                }
                fileName="cv.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download Your CV"
                }
              </PDFDownloadLink>
            </button>
          </div>
        </form>
        {displayPdf && (
          <PDFViewer className="pdf-viwer" showToolbar={false}>
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
          </PDFViewer>
        )}
      </div>
    </div>
  );
}

export default ResumeBuilder;
