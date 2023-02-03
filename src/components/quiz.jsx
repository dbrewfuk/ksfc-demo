import React, { useState } from "react";

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    score: 0,
    answers: [],
    isModalOpen: false
  };

  questions = [
    {
      text: "Are you currently enrolled in a full-time undergraduate program?",
      options: ["Yes", "No"],
      answer: 0
    },
    {
      text: "Have you maintained a minimum GPA of 3.0 or higher?",
      options: ["Yes", "No"],
      answer: 0
    },
    {
      text: "Are you a citizen or permanent resident of the United States?",
      options: ["Yes", "No"],
      answer: 0
    }
  ];

  handleOptionClick = (option) => {
    this.setState({
      answers: [...this.state.answers, option]
    });

    if (this.questions[this.state.currentQuestion].answer === option) {
      this.setState({ score: this.state.score + 1 });
    }

    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  };

  closeMod = () => {
    this.setState({ isModalOpen: false });
  };

  handleRetake = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      isModalOpen: false
    });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    if (this.state.currentQuestion >= this.questions.length) {
      const eligibility = this.state.score === this.questions.length;
      let result;

      if (eligibility) {
        result =
          "Congratulations! You are eligible for the scholarship program.";
      } else {
        result =
          "Unfortunately, based on your answers, you are not eligible for the scholarship program.";
      }

      return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p className="success-error">{result}</p>
            <button className="eligibility__button" onClick={this.handleRetake}>
              Retake the quiz
            </button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <button id="myBtn" className="eligibility__button" onClick={this.openModal}>
          Take the eligibility quiz
        </button>
        {this.state.isModalOpen && (
          <div id="myModal" className="modal">
            <span className="close" onClick={this.handleRetake}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
            <div className="modal-content">
              <h2 className="question question-animation">
                {this.questions[this.state.currentQuestion].text}
              </h2>
              <div className="button-group">
                {this.questions[this.state.currentQuestion].options.map(
                  (option, index) => (
                    <button
                      className="eligibility__button--secondary"
                      key={index}
                      onClick={() => this.handleOptionClick(index)}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
