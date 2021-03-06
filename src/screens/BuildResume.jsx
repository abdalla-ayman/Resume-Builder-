import EmploymentHistorySection from "../components/EmploymentHistory";
import PersonalDetailsSection from "../components/PersonalDetails";
import ProfessionalSummarySection from "../components/ProfessionalSummary";
import EducationDetailsSection from "../components/EducationDetails";
import SocialLinksSection from "../components/SocialLinks";
import SkillsSection from "../components/Skills";
import PDFfile from "../components/PDFfile";
import { useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { isMobile } from "react-device-detect";

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
  console.log(isMobile);
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
          <div
            className={
              isMobile
                ? "w-100 mt-5 d-flex flex-column align-items-center justify-content-center"
                : "w-100 mt-5 d-flex flex-column align-items-end justify-content-center " +
                  "floating"
            }
          >
{!isMobile && 
            <button
              type="button"
              className="btn btn-primary  d-pdf my-2 mx-2"
              onClick={() => setDisplayPdf(!displayPdf)}
            >
              {displayPdf ? "Go Back" : "Preview Your CV"}
            </button>
}
            <button type="submit" className="btn btn-success  d-pdf my-2 mx-2">
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
                fileName={personalDetails.firstName + "CV.pdf"}
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download Your CV"
                }
              </PDFDownloadLink>
            </button>
          </div>
        </form>
        {displayPdf && !isMobile && (
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
