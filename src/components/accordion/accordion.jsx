import { useState } from "react";

const steps = [
  {
    title: "Step 1. The Work Ready Kentucky Scholarship is available to:",
    content:
      "",
  },
  {
    title: "Step 2. Apply to the college or university of your choice.",
    content:
      "",
  },
  {
    title: "Step 3. Complete the FAFSA.",
    content:
      "",
  },
  {
    title: "Step 4. Write a strong personal statement",
    content:
      "",
  },
  {
    title: "Step 5. Apply for the Work Ready Scholarship",
    content:
    ""
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

          <div className="accordion-content">{step.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
