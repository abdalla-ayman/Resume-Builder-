import EmploymentHistorySection from "../components/EmploymentHistory";
import PersonalDetailsSection from "../components/PersonalDetails";
import ProfessionalSummarySection from "../components/ProfessionalSummary";
import EducationDetailsSection from "../components/EducationDetails";
import SocialLinksSection from "../components/SocialLinks";
import SkillsSection from "../components/Skills";

function ResumeBuilder() {
  return (
    <div className="ResumeBuilder page ">
      <div className="container mt-4">
        <h1 className="text-center">Resume Builder</h1>
        <form className="mt-5">
          <PersonalDetailsSection />
          <ProfessionalSummarySection />
          <EmploymentHistorySection />
          <EducationDetailsSection />
          <SocialLinksSection />
          <SkillsSection />
       
        </form>
      </div>
    </div>
  );
}

export default ResumeBuilder;
