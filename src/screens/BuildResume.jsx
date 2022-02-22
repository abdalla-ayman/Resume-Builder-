import EmploymentHistorySection from "../components/EmploymentHistory";
import PersonalDetailsSection from "../components/PersonalDetails";
import ProfessionalSummarySection from "../components/ProfessionalSummary";
function ResumeBuilder() {
  return (
    <div className="ResumeBuilder page ">
      <div className="container mt-4">
        <h1 className="text-center">Resume Builder</h1>
        <form className="mt-5">
          <PersonalDetailsSection />
          <ProfessionalSummarySection />
          <EmploymentHistorySection />
          <section>
            <h3 className="my-4">Education : </h3>
          </section>
          <section>
            <h3 className="my-4">Websites and Social Links : </h3>
          </section>
          <section>
            <h3 className="my-4">Skills : </h3>
          </section>
        </form>
      </div>
    </div>
  );
}

export default ResumeBuilder;
