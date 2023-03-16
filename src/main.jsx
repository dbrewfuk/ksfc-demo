import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./components/quiz/quiz.jsx";
import Faq from "./components/faq/faq.jsx";
import ProgramFinder from "./components/program-finder/program-finder.jsx";
import Accordion from "./components/accordion/accordion.jsx";
import "./components/base.css";
import "./components/footer/footer.css";
import "./components/header/header.css";
import "./components/hero/hero.css";
import "./components/key-figures/key-figures.css";
import "./components/marquee/marquee.css";
import "./components/testimonial/testimonial.css";
import "./components/form/form.css";
import "./components/alert/alert.css";

ReactDOM.render(React.createElement(Quiz), document.getElementById("quiz"));

ReactDOM.render(
  React.createElement(ProgramFinder),
  document.getElementById("program-finder")
);

ReactDOM.render(React.createElement(Faq), document.getElementById("faq"));

ReactDOM.render(
  React.createElement(Accordion),
  document.getElementById("accordion")
);

/*
 JS to toggle scroll axis styles
*/
const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");

control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});

// Get references to the top-left and bottom-right items
const topLeftItem = document.querySelector(".top-left-item");
const bottomRightItem = document.querySelector(".bottom-right-item");

// Define the amount of vertical movement for each item
const topLeftMovement = 50; // In pixels
const bottomRightMovement = -50; // In pixels

// Define the function to update the positions of the items based on the scroll position
function updateItemPositions() {
  const scrollPosition = window.scrollY;
  const topPosition = Math.max(0, scrollPosition - window.innerHeight / 2);
  const bottomPosition = Math.min(
    window.innerHeight,
    scrollPosition + window.innerHeight / 2
  );

  // Update the top-left item position
  topLeftItem.style.transform = `translateY(${
    topPosition + topLeftMovement
  }px)`;

  // Update the bottom-right item position
  bottomRightItem.style.transform = `translateY(${
    bottomPosition + bottomRightMovement
  }px)`;
}

// Call the updateItemPositions function on page load and on scroll
window.addEventListener("load", updateItemPositions);
window.addEventListener("scroll", updateItemPositions);
