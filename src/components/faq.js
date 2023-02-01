import React, { useState } from "react";
import ReactDOM from "react-dom";

const FaqCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
    className={`faq-card ${isFlipped && "flipped"}`} 
    tabindex={0}
    onKeyDown={e => {
      if (e.key === "Enter" || e.key === " ") {
        setIsFlipped(!isFlipped);
      }}}     
    >

      <div className="faq-card-front faq-card-inner">
      
      <div className="faq-card-content">
        <p>{question}</p>
        
        </div>
        <button className="faq-card-button" aria-expanded={isFlipped} tabindex="0" role="button" onClick={() => setIsFlipped(!isFlipped)} onKeyDown={e => {
    if (e.key === "Enter" || e.key === " ") {
      setIsFlipped(!isFlipped);
    }
  }}                             >
          {isFlipped ? "Hide Answer" : "Show Answer"}
        </button>
      </div>
      <div className="faq-card-back faq-card-inner">
      
        <div className="faq-card-content">    
        <p>{answer}</p>
        </div>
        <button className="faq-card-button" aria-expanded={isFlipped} tabindex="0"  role="button" onClick={() => setIsFlipped(!isFlipped)} onKeyDown={e => {
    if (e.key === "Enter" || e.key === " ") {
      setIsFlipped(!isFlipped);
    }
  }} tabIndex={0}>
          {isFlipped ? "Hide Answer" : "Show Answer"}
        </button>
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
      question: "What is React?",
      answer:
        "React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      question: "What are the advantages of using React?",
      answer:
        "There are several advantages of using React, including improved performance, modular architecture, and easy learning curve due to its simplicity and clarity."
    },
    {
      question: "What is Virtual DOM in React?",
      answer:
        "Virtual DOM is a lightweight in-memory representation of the actual DOM, in React. React uses the virtual DOM to efficiently update the real DOM, by making the minimum necessary changes."
    },
    {
      question: "What is React?",
      answer:
        "React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      question: "What are the advantages of using React?",
      answer:
        "There are several advantages of using React, including improved performance, modular architecture, and easy learning curve due to its simplicity and clarity."
    },
    {
      question: "What is Virtual DOM in React?",
      answer:
        "Virtual DOM is a lightweight in-memory representation of the actual DOM, in React. React uses the virtual DOM to efficiently update the real DOM, by making the minimum necessary changes."
    }
  ];

  return <FaqSection faqList={faqList} />;
};

ReactDOM.render(<Faq />, document.getElementById("faq"));