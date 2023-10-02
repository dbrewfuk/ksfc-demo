import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";
import SectionNav from "./components/section-nav/index.jsx";
import Alert from "./components/alert/index.jsx";
import MobileNav from "./components/mobile-nav/index.jsx";
import Search from "./components/search/index.jsx";
import "./components/base.css";
import "./components/footer/footer.css";
import "./components/header/header.css";
import "./components/hero/hero.css";
import "./components/key-figures/key-figures.css";
import "./components/marquee/marquee.css";
import "./components/testimonial/testimonial.css";
import "./components/form/form.css";
import "./components/alert/alert.css";
import "./components/section-nav/section-nav.css";
import "./components/anchor-nav/anchor-nav.css";
import "./components/l-two-column.css";
import "./components/page-intro.css";
import "./components/utility-nav.css";
import "./components/link-card.css";
import "./components/resources-search.css";
import "./components/button.css";


ReactDOM.render(React.createElement(Alert), document.getElementById("alert"));
ReactDOM.render(React.createElement(Header), document.getElementById("header"));
ReactDOM.render(React.createElement(Footer), document.getElementById("footer"));
ReactDOM.render(React.createElement(Search), document.getElementById("search"));
ReactDOM.render(React.createElement(SectionNav), document.getElementById("section-nav"));
ReactDOM.render(React.createElement(MobileNav), document.getElementById("mobile-nav"));



const searchToggle = document.getElementById("search-toggle");
searchToggle.addEventListener ("click", () => {
  searchToggle.classList.toggle("active");
});


