import { useState } from "react";

const steps = [
  {
    title: "Step 1: Research available scholarships",
    content:
      "Start by researching available scholarships that fit your background and goals. Look for scholarships offered by foundations, corporations, and government agencies. Make a list of potential scholarships and take note of the eligibility criteria, deadlines, and application requirements."
  },
  {
    title: "Step 2: Gather necessary information and documents",
    content:
      "Before you start your scholarship application, make sure you have all the necessary information and documents ready. This may include transcripts, test scores, reference letters, and essays. If you need to request these documents from third parties, do it well in advance of the scholarship deadline."
  },
  {
    title: "Step 3: Read the instructions carefully",
    content:
      "Read the instructions for the scholarship application carefully to make sure you understand what is required. Pay attention to the format, word count, and submission guidelines. Make sure you follow the instructions to the letter to increase your chances of being selected."
  },
  {
    title: "Step 4: Write a strong personal statement",
    content:
      "Your personal statement is a key component of your scholarship application. This is your opportunity to showcase your accomplishments, skills, and goals. Write a well-structured essay that clearly states your case for why you deserve the scholarship. Make sure it's grammatically correct, free of typos, and makes a strong impression."
  },
  {
    title: "Step 5: Submit your application",
    content:
      "Once you've completed your scholarship application, double-check that you've included all the required information and documents. Submit your application before the deadline and keep a copy for your records. After you've submitted your application, follow up with the scholarship organization to ensure that your application was received."
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
              alignItems: "center"
            }}
          >
            <h3 className="accordion-title">{step.title}</h3>
            <div className="accordion-icon">
              {activeIndex === index ? (
                <svg viewBox="0 0 24 24" width="48" height="48" className="expanded">
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
          
            <div className="accordion-content">{step.content}</div>
      
        </div>
      ))}
    </div>
  );
};


export default Accordion;