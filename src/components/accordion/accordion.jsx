import { useState } from "react";
import "./accordion.css";



const steps = [
{
    title: "Step 1. The Work Ready Kentucky Scholarship is available to:",
    content:
      "<div><ol><li>Kentucky residents.</li><li>Those with a high school diploma or students working on their GED.</li><li>Anyone without an associate degree or higher.</li></ol><p>The scholarship is not income or GPA based. No essay is required.</p></div>",
  },
  {
    title: "Step 2. Apply to the college or university of your choice.",
    content:
      "<ul class='list f3 ml0 pl0'><li><a href='https://students.kctcs.edu/psc/stdsaprd/EMPLOYEE/SA/c/COMMUNITY_ACCESS.K_OLA_LANDING_FL.GBL?&amp;'>Kentucky Community and Technical College System</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://www.campbellsville.edu/admission-and-aid/apply-now/'>Campbellsville University</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://admissions.eku.edu/apply'>Eastern Kentucky University</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://apply.galencollege.edu/'>Galen College of Nursing</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://medquestcollege.edu/apply-online.html'>MedQuest College</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://www.nku.edu/apply.html'>Northern Kentucky University</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://www.sullivan.edu/apply-online'>Sullivan University</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://www.ucumberlands.edu/apply'>University of the Cumberlands</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://www.uky.edu/admission/apply-uk'>University of Kentucky</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://acsapps.wku.edu/pls/prod/twbkwbis.P_GenMenu?name=wkumenu.P_AdmUnsecMnu'>Western Kentucky University</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://apply.louisville.edu/register/applynow'>University of Louisville</a></li><li><a class='dib mb3 link bb pb1 bw1 navy' href='https://medicalcareerandtechnicalcollege.edu/financial-aid/'>Medical Career and Technical College</a></li></ul>",
  },
  {
    title: "Step 3. Complete the FAFSA.",
    content:
      "<p class='accordion__paragraph'>Submit your application today!</p><a class='button button--primary' href='https://studentaid.gov/h/apply-for-aid/fafsa'>Apply</a>",
  },
  {
    title: "Step 4. Apply for the Work Ready Scholarship",
    content:
    "<p class='accordion__paragraph'>Apply for the scholarship today. There's no essay or application fee!</p><a class='button button--primary' href='https://www.kheaa.com/website/kheaa/work_ready?main=1'>Apply</a>"
  }
];

const Accordion = ({ title, children }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
        >
          <div
            className="accordion-header"
            onClick={() => handleClick(index)}
            onKeyPress={() => handleClick(index)}
            role="button"
            tabIndex={0}
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              padding: "24px 0",
              alignItems: "center",
            }}
          >
            <h3 className="accordion-title">{step.title}</h3>
            <div className="accordion-icon">
              {activeIndex === index ? (
                <svg
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  className="expanded"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              )}
            </div>
          </div>
          <div className="accordion-divider"></div>

          <div className="accordion-content">
          <div dangerouslySetInnerHTML={{__html: step.content}}/>
          </div>
        </div>
      ))}
    </div>


  );
};

export default Accordion;
