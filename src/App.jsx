import { useState } from "react";

import "./components/base.css";
import "./components/header.css";
import "./App.css";
import Faq from "./components/faq.jsx";
import Quiz from "./components/quiz.jsx";
import AcademicProgramsCard from "./components/program-cards.jsx";
import Accordion from "./components/accordion.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <div className="header-left">
            <img src="" alt="Work Ready Kentucky Scholarship logo" />
          </div>
          <div className="header-right">
            <div className="header__nav-wrapper">
              <ul className="header__nav">
                <li>
                  <a className="header__nav__link" href="" title="">
                    Nav Link
                  </a>
                </li>
                <li>
                  <a className="header__nav__link" href="" title="">
                    Nav Link
                  </a>
                </li>
                <li>
                  <a className="header__nav__link" href="" title="">
                    Nav Link
                  </a>
                </li>
                <li>
                  <a className="header__nav__link" href="" title="">
                    Nav Link
                  </a>
                </li>
              </ul>
              <div className="header__cta">
                <a className="header__cta__button header__cta__button--secondary">
                  Button
                </a>
                <a className="header__cta__button header__button">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero-left">
              <h1 className="hero__headline">Page headline</h1>
              <p className="hero__subheadline">
                Lorem ipsum dolor sit amet consectetur. A vulputate adipiscing
                quisque accumsan.
              </p>
              <div className="hero__cta-wrapper">
                <div className="hero__button">Button</div>
                <div className="hero__button--secondary">Button</div>
              </div>
            </div>
            <div className="hero-right">
              <img className="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="key-figure__container">
            <div className="key-figure__card">
              <div className="key-figure__card__img-wrapper">
                <img className="key-figure__card__img" src="" />
              </div>
              <h3 className="key-figure__card__title">Key figure</h3>
              <p className="key-figure__card__copy">Key figure copy</p>
            </div>
            <div className="key-figure__card">
              <div className="key-figure__card__img-wrapper">
                <img className="key-figure__card__img" src="" />
              </div>
              <h3 className="key-figure__card__title">Key figure</h3>
              <p className="key-figure__card__copy">Key figure copy</p>
            </div>
            <div className="key-figure__card">
              <div className="key-figure__card__img-wrapper">
                <img className="key-figure__card__img" src="" />
              </div>
              <h3 className="key-figure__card__title">Key figure</h3>
              <p className="key-figure__card__copy">Key figure copy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="hta__headline">How to Apply</h2>
          <Accordion />
          <div className="steps__button-wrapper">
            <div className="steps__button">Button</div>
          </div>
        </div>
      </div>

      <div className="section eligibility">
        <div className="container">
          <div className="eligibility__wrapper">
            <p className="eligibility__copy">
              Lorem ipsum dolor sit amet consectetur. Vitae suscipit tellus
              tellus vestibulum cras faucibus enim blandit. Ut neque neque
              gravida facilisis turpis.
            </p>
            <div className="button-wrapper">
              <Quiz />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="pf-headline">Eligible Programs</h2>
          <AcademicProgramsCard />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="faq-headline">FAQs</h2>
          <Faq />
        </div>
      </div>

      <div className="section testimonial">
        <div className="container">
          <div className="pull-quote">
            <blockquote>
              <p className="pull-quote__content">
                A responsive pull quote is a greate way to highlight important
                text on a website.
              </p>
              <cite>John Doe</cite>
            </blockquote>
          </div>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DHWUAPrazh8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer-left">
              <h3 className="footer__headline">Footer Headline</h3>
              <p className="footer__subheadline">
                Lorem ipsum dolor sit amet consectetur. A vulputate adipiscing
                quisque accumsan.
              </p>
            </div>
            <div className="footer-right"></div>
          </div>
        </div>
      </div>
      <div className="legal">
        <div className="legal__wrapper">
          <div className="legal-left">
            <p>&copy; 2023 Kentucky Community and Technical College System</p>
          </div>
          <div className="legal-right">
            <a className="legal__link" href="" title="">
              Privacy and Terms
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
