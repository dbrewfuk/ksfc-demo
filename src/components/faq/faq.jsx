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
            {isFlipped ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.75 44.4q-2.5-.35-4.8-1.275-2.3-.925-4.35-2.475l2.5-2.5q1.55 1.2 3.225 1.875T21.75 41Zm4.5 0V41q5.45-1.1 9.05-5.175 3.6-4.075 3.6-9.875 0-6.2-4.2-10.525T24.25 11.1h-.95l3.75 3.7-2.5 2.5-7.95-7.95 7.95-7.95 2.5 2.5-3.8 3.75h1q3.75 0 7.05 1.45t5.75 3.925q2.45 2.475 3.85 5.8 1.4 3.325 1.4 7.125 0 7.1-4.525 12.25T26.25 44.4Zm-16.8-6.9Q8 35.6 7.075 33.2t-1.275-5h3.45q.25 1.9.925 3.6.675 1.7 1.775 3.2ZM5.8 23.7q.35-2.55 1.25-4.875t2.4-4.375l2.55 2.4q-1.15 1.65-1.825 3.375T9.25 23.7Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M26.35 44.4V41q1.75-.3 3.425-.975Q31.45 39.35 33 38.15l2.5 2.5q-2.05 1.55-4.35 2.475t-4.8 1.275Zm-4.5 0q-7-1.05-11.525-6.2T5.8 25.95q0-3.8 1.4-7.125t3.85-5.8Q13.5 10.55 16.8 9.1q3.3-1.45 7.05-1.45h1l-3.8-3.75 2.5-2.5 7.95 7.95-7.95 7.95-2.5-2.5 3.75-3.7h-.95q-6.25 0-10.45 4.325Q9.2 19.75 9.2 25.95q0 5.8 3.6 9.875T21.85 41Zm16.8-6.9-2.5-2.5q1.1-1.5 1.775-3.2.675-1.7.925-3.6h3.45q-.35 2.6-1.275 5-.925 2.4-2.375 4.3Zm3.65-13.8h-3.45q-.25-1.75-.925-3.475T36.1 16.85l2.55-2.4q1.5 2.05 2.4 4.375.9 2.325 1.25 4.875Z"/></svg>}
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
            {isFlipped ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.75 44.4q-2.5-.35-4.8-1.275-2.3-.925-4.35-2.475l2.5-2.5q1.55 1.2 3.225 1.875T21.75 41Zm4.5 0V41q5.45-1.1 9.05-5.175 3.6-4.075 3.6-9.875 0-6.2-4.2-10.525T24.25 11.1h-.95l3.75 3.7-2.5 2.5-7.95-7.95 7.95-7.95 2.5 2.5-3.8 3.75h1q3.75 0 7.05 1.45t5.75 3.925q2.45 2.475 3.85 5.8 1.4 3.325 1.4 7.125 0 7.1-4.525 12.25T26.25 44.4Zm-16.8-6.9Q8 35.6 7.075 33.2t-1.275-5h3.45q.25 1.9.925 3.6.675 1.7 1.775 3.2ZM5.8 23.7q.35-2.55 1.25-4.875t2.4-4.375l2.55 2.4q-1.15 1.65-1.825 3.375T9.25 23.7Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M26.35 44.4V41q1.75-.3 3.425-.975Q31.45 39.35 33 38.15l2.5 2.5q-2.05 1.55-4.35 2.475t-4.8 1.275Zm-4.5 0q-7-1.05-11.525-6.2T5.8 25.95q0-3.8 1.4-7.125t3.85-5.8Q13.5 10.55 16.8 9.1q3.3-1.45 7.05-1.45h1l-3.8-3.75 2.5-2.5 7.95 7.95-7.95 7.95-2.5-2.5 3.75-3.7h-.95q-6.25 0-10.45 4.325Q9.2 19.75 9.2 25.95q0 5.8 3.6 9.875T21.85 41Zm16.8-6.9-2.5-2.5q1.1-1.5 1.775-3.2.675-1.7.925-3.6h3.45q-.35 2.6-1.275 5-.925 2.4-2.375 4.3Zm3.65-13.8h-3.45q-.25-1.75-.925-3.475T36.1 16.85l2.55-2.4q1.5 2.05 2.4 4.375.9 2.325 1.25 4.875Z"/></svg>}
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
