import { useState } from "react";

const FaqCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`faq-card ${isFlipped && "flipped"}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div className="faq-card-front faq-card-inner">
        <div className="faq-card-content">
          <p>{question}</p>
        </div>
        <div class="faq-card-footer">
          <button
            className="faq-card-button"
            aria-expanded={isFlipped}
            tabIndex="0"
            role="button"
            onClick={() => setIsFlipped(!isFlipped)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsFlipped(!isFlipped);
              }
            }}
          >
            {isFlipped ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
      </div>
      <div className="faq-card-back faq-card-inner">
        <div className="faq-card-content">
          <p>{answer}</p>
        </div>
        <div class="faq-card-footer">
          <button
            className="faq-card-button"
            aria-expanded={isFlipped}
            tabIndex="0"
            role="button"
            onClick={() => setIsFlipped(!isFlipped)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsFlipped(!isFlipped);
              }
            }}
          >
            {isFlipped ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
      </div>
    </div>
  );
};

const FaqSection = ({ faqList }) => {
  return (
    <div className="faq-section">
      {faqList.map((faq, index) => (
        <FaqCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const Faq = () => {
  const faqList = [
    {
      question:
        "If a student has questions about their WRKS application or want to check their application status, what should they do?  ",
      answer:
        "Students should check their KHEAA account, if needed call KHEAA.",
    },
    {
      question:
        "If a student applied for the WRKS last year and got approved, do they need to reapply for the upcoming school year?",
      answer:
        "Yes, students need to reapply each year. The application for the scholarship opens May 1st. ",
    },
    {
      question:
        "Once a student’s WRKS application is completed, should they contact their school to inform them?",
      answer: "No, students do not need to contact the school.",
    },
    {
      question: "When does a student find out if they got approved?",
      answer:
        "In recent years, KHEAA sends out more information in July about scholarship status.",
    },
    {
      question:
        "If an award is showing on the students KHEAA account but not showing awarded at the school, what does this mean?",
      answer:
        "KHEAA may award a student WRKS, but they may not meet some of the eligibility criteria at the school (enrolled in eligible program, SAP, etc.). Students should contact the financial aid office at their school for additional information.",
    },
    {
      question:
        "If a student has already applied to the school and scholarship, but would like to switch their program of study now – what should they do?",
      answer:
        "A student can switch their program of study to another program that meets the eligibility criteria for the Work Ready Scholarship. The program also must be Work Ready eligible. If a student is in any ineligible program, they will not be awarded the scholarship. Students should consult with their Financial Aid advisor regarding correct steps.",
    },
  ];

  return <FaqSection faqList={faqList} />;
};

export default Faq;
