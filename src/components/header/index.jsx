import React, { useState } from "react";
import PrimaryNav from "../primary-nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [activeSubSubNav, setActiveSubSubNav] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeSearch = () => {
    setSearchIsOpen(false);
  };

  const openSearch = () => {
    setSearchIsOpen(true);
  };

  const mainNavItems = [
    "About",
    "Administration",
    "Programs and Services",
    "Training and Education",
    "Resources",
    "News & Events",
  ];

  const subNavs = {
    About: ["Mission and Vision", "Our History"],
    Administration: [
      "Board Members",
      "Committees",
      "Meeting Information",
      "Financial Disclosure",
    ],
    "Programs and Services": [
      "Health and Wellness",
      "National Fire Incident Reporting",
      "Junior Firefighter Program",
    ],
    "Training and Education": [
      "Educational Programs",
      "Degree Programs",
      "Fire Department Training",
      "Emergency Services Training",
      "Business, Industry, and Government Training",
    ],
    Resources: ["Forms", "Annual Reports", "Demo"],
    "News and Events": [],
    "Item 6": ["Link 3.1", "Link 3.2", "Link 3.3"],
  };
  // Third-level navigation for Resources
  const subSubNav = {
    Forms: ["Form 1", "Form 2"],
    "Annual Reports": ["Report 2022", "Report 2021"],
    Demo: ["Demo Link 1", "Demo Link 2"],
  };

  const handleSubNavItemToggle = (item) => {
    if (activeNav === item) {
      setActiveNav(null);
    } else {
      setActiveNav(item);
    }
  };

  return (
    <>
      <div class="header--mobile">
        <div class="header--mobile__header">
          <div class="header--mobile__logo">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="white" />
              <circle cx="40" cy="40" r="8" fill="white" />
            </svg>
          </div>
          <div
            className={`header--mobile__menu-toggle ${isOpen ? "is-open" : ""}`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <div class="header--mobile__menu__close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_31_287)">
                    <path
                      d="M1.73692 0.5L0.5 1.73866L11.2622 12.5009L0.5 23.2631L1.73692 24.5L12.4991 13.7378L23.2631 24.5L24.5 23.2613L13.7378 12.4991L24.5 1.73692L23.2631 0.50175L12.5017 11.264L1.73692 0.5Z"
                      fill="#002b55"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_287">
                      <rect
                        width="24"
                        height="24"
                        fill="#002b55"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            ) : (
              <div class="header--mobile__menu__open">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="17"
                  viewBox="0 0 25 17"
                  fill="none"
                >
                  <path
                    d="M14.2146 14.4997V16.2143H0.5V14.4997H14.2146ZM24.5 7.64245V9.35701H0.5V7.64245H24.5ZM24.5 0.786133V2.70613H0.5V0.786133H24.5Z"
                    fill="#002b55"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className={`header__mobile-nav ${isOpen ? "is-open" : ""}`}>
          <div className="header__utility-nav__search">
            {!searchIsOpen && (
              <span className="search-icon" onClick={openSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_68_1109)">
                    <path
                      d="M15.9761 2.41509C13.9912 2.41678 12.042 2.9426 10.3256 3.93936C9.03347 4.68054 7.90126 5.67072 6.99452 6.85255C6.08779 8.03438 5.42455 9.38438 5.04324 10.8243C4.65359 12.2622 4.55305 13.7631 4.74744 15.2401C4.94183 16.7171 5.42729 18.1409 6.17571 19.4289C9.11154 24.5149 15.4212 26.4663 20.6627 24.0919L22.6163 22.9648C24.7456 21.4422 26.277 19.2245 26.9466 16.6939C27.7302 13.7688 27.3287 10.7127 25.8141 8.09032C24.2995 5.46793 21.8553 3.59265 18.9291 2.8069C17.966 2.54854 16.9733 2.41611 15.9761 2.41509ZM25.214 31.9999L21.8639 26.1969C15.4641 29.2208 7.68387 26.8689 4.08467 20.6366C0.292241 14.0672 2.54966 5.64075 9.11798 1.84725C10.6806 0.940095 12.4075 0.351599 14.1989 0.115765C15.9904 -0.120068 17.8108 0.0014374 19.5549 0.473261C21.3014 0.936197 22.9387 1.74096 24.372 2.84097C25.8053 3.94097 27.0062 5.31436 27.9051 6.88163C28.8128 8.44405 29.4017 10.171 29.6375 11.9625C29.8734 13.754 29.7515 15.5745 29.2791 17.3186C28.4578 20.4191 26.5709 23.1314 23.9495 24.9797L27.3051 30.7923L25.214 31.9999Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_1109">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            )}
            {searchIsOpen && (
              <div class="search__wrapper">
                <input />
                <span className="search-icon" onClick={openSearch}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_68_1109)">
                      <path
                        d="M15.9761 2.41509C13.9912 2.41678 12.042 2.9426 10.3256 3.93936C9.03347 4.68054 7.90126 5.67072 6.99452 6.85255C6.08779 8.03438 5.42455 9.38438 5.04324 10.8243C4.65359 12.2622 4.55305 13.7631 4.74744 15.2401C4.94183 16.7171 5.42729 18.1409 6.17571 19.4289C9.11154 24.5149 15.4212 26.4663 20.6627 24.0919L22.6163 22.9648C24.7456 21.4422 26.277 19.2245 26.9466 16.6939C27.7302 13.7688 27.3287 10.7127 25.8141 8.09032C24.2995 5.46793 21.8553 3.59265 18.9291 2.8069C17.966 2.54854 16.9733 2.41611 15.9761 2.41509ZM25.214 31.9999L21.8639 26.1969C15.4641 29.2208 7.68387 26.8689 4.08467 20.6366C0.292241 14.0672 2.54966 5.64075 9.11798 1.84725C10.6806 0.940095 12.4075 0.351599 14.1989 0.115765C15.9904 -0.120068 17.8108 0.0014374 19.5549 0.473261C21.3014 0.936197 22.9387 1.74096 24.372 2.84097C25.8053 3.94097 27.0062 5.31436 27.9051 6.88163C28.8128 8.44405 29.4017 10.171 29.6375 11.9625C29.8734 13.754 29.7515 15.5745 29.2791 17.3186C28.4578 20.4191 26.5709 23.1314 23.9495 24.9797L27.3051 30.7923L25.214 31.9999Z"
                        fill="#00467F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_68_1109">
                        <rect width="32" height="32" fill="#002b55" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  class="close-icon"
                  id="search-close"
                  onClick={closeSearch}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_69_1111)">
                      <path
                        d="M1.64922 0L0 1.65155L14.3496 16.0012L0 30.3508L1.64922 32L15.9988 17.6504L30.3508 32L32 30.3484L17.6504 15.9988L32 1.64922L30.3508 0.0023327L16.0023 14.3519L1.64922 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_69_1111">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            )}
          </div>

          <ul className="header__mobile-primary-nav__list">
            {mainNavItems.map((item) => (
              <li
                className="header__mobile-primary-nav__list-item"
                key={item}
                onClick={() => handleSubNavItemToggle(item)}
              >
                <a className="header__mobile-primary-nav__link" href="#">
                  {item}
                </a>
                {activeNav === item && subNavs[activeNav] && (
                  <ul className="header__mobile-sub-nav__list">
                    {subNavs[activeNav].map((link, index) => (
                      <li
                        className="header__mobile-sub-nav__list-item"
                        key={index}
                      >
                        <a className="header__mobile-sub-nav__link" href="#">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div class="header__utility-nav">
            <div class="header__utility-nav__wrapper">
              <div class="header__utility-nav__flex">
                <div class="header__utility-nav__flex__flex-item">
                  <ul class="header__utility-nav__list">
                    <li class="header__utility-nav__list-item">
                      <a class="header__utility-nav__link" href="/home.html">
                        Contact Us
                      </a>
                    </li>
                    <li class="header__utility-nav__list-item">
                      <a
                        class="header__utility-nav__link"
                        href="/interior-landing.html"
                      >
                        FAQ
                      </a>
                    </li>
                    <li class="header__utility-nav__list-item">
                      <a
                        class="header__utility-nav__link"
                        href="/interior.html"
                      >
                        Explore Resources
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="header__utility-nav__flex__flex-item d-flex align-items-center">
                  <div class="button button--small">Request Information</div>
                </div>
                <div class="header__utility-nav__flex__flex-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header--large">
        <div class="header__utility-nav">
          <div class="header__utility-nav__wrapper">
            <div class="header__utility-nav__flex">
              <div class="header__utility-nav__flex__flex-item">
                <ul class="header__utility-nav__list">
                  <li class="header__utility-nav__list-item">
                    <a class="header__utility-nav__link" href="/home.html">
                      Contact Us
                    </a>
                  </li>
                  <li class="header__utility-nav__list-item">
                    <a
                      class="header__utility-nav__link"
                      href="/interior-landing.html"
                    >
                      FAQ
                    </a>
                  </li>
                  <li class="header__utility-nav__list-item">
                    <a class="header__utility-nav__link" href="/interior.html">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div class="header__utility-nav__flex__flex-item d-flex align-items-center">
                <div class="button button--small">Request Information</div>
              </div>
              <div class="header__utility-nav__flex__flex-item">
                <div className="header__utility-nav__search">
                  {!searchIsOpen && (
                    <span className="search-icon" onClick={openSearch}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_68_1109)">
                          <path
                            d="M15.9761 2.41509C13.9912 2.41678 12.042 2.9426 10.3256 3.93936C9.03347 4.68054 7.90126 5.67072 6.99452 6.85255C6.08779 8.03438 5.42455 9.38438 5.04324 10.8243C4.65359 12.2622 4.55305 13.7631 4.74744 15.2401C4.94183 16.7171 5.42729 18.1409 6.17571 19.4289C9.11154 24.5149 15.4212 26.4663 20.6627 24.0919L22.6163 22.9648C24.7456 21.4422 26.277 19.2245 26.9466 16.6939C27.7302 13.7688 27.3287 10.7127 25.8141 8.09032C24.2995 5.46793 21.8553 3.59265 18.9291 2.8069C17.966 2.54854 16.9733 2.41611 15.9761 2.41509ZM25.214 31.9999L21.8639 26.1969C15.4641 29.2208 7.68387 26.8689 4.08467 20.6366C0.292241 14.0672 2.54966 5.64075 9.11798 1.84725C10.6806 0.940095 12.4075 0.351599 14.1989 0.115765C15.9904 -0.120068 17.8108 0.0014374 19.5549 0.473261C21.3014 0.936197 22.9387 1.74096 24.372 2.84097C25.8053 3.94097 27.0062 5.31436 27.9051 6.88163C28.8128 8.44405 29.4017 10.171 29.6375 11.9625C29.8734 13.754 29.7515 15.5745 29.2791 17.3186C28.4578 20.4191 26.5709 23.1314 23.9495 24.9797L27.3051 30.7923L25.214 31.9999Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_68_1109">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  )}
                  {searchIsOpen && (
                    <div class="search__wrapper">
                      <input />
                      <span className="search-icon" onClick={openSearch}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_68_1109)">
                            <path
                              d="M15.9761 2.41509C13.9912 2.41678 12.042 2.9426 10.3256 3.93936C9.03347 4.68054 7.90126 5.67072 6.99452 6.85255C6.08779 8.03438 5.42455 9.38438 5.04324 10.8243C4.65359 12.2622 4.55305 13.7631 4.74744 15.2401C4.94183 16.7171 5.42729 18.1409 6.17571 19.4289C9.11154 24.5149 15.4212 26.4663 20.6627 24.0919L22.6163 22.9648C24.7456 21.4422 26.277 19.2245 26.9466 16.6939C27.7302 13.7688 27.3287 10.7127 25.8141 8.09032C24.2995 5.46793 21.8553 3.59265 18.9291 2.8069C17.966 2.54854 16.9733 2.41611 15.9761 2.41509ZM25.214 31.9999L21.8639 26.1969C15.4641 29.2208 7.68387 26.8689 4.08467 20.6366C0.292241 14.0672 2.54966 5.64075 9.11798 1.84725C10.6806 0.940095 12.4075 0.351599 14.1989 0.115765C15.9904 -0.120068 17.8108 0.0014374 19.5549 0.473261C21.3014 0.936197 22.9387 1.74096 24.372 2.84097C25.8053 3.94097 27.0062 5.31436 27.9051 6.88163C28.8128 8.44405 29.4017 10.171 29.6375 11.9625C29.8734 13.754 29.7515 15.5745 29.2791 17.3186C28.4578 20.4191 26.5709 23.1314 23.9495 24.9797L27.3051 30.7923L25.214 31.9999Z"
                              fill="#00467F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_68_1109">
                              <rect width="32" height="32" fill="#002b55" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span
                        class="close-icon"
                        id="search-close"
                        onClick={closeSearch}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_69_1111)">
                            <path
                              d="M1.64922 0L0 1.65155L14.3496 16.0012L0 30.3508L1.64922 32L15.9988 17.6504L30.3508 32L32 30.3484L17.6504 15.9988L32 1.64922L30.3508 0.0023327L16.0023 14.3519L1.64922 0Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_69_1111">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrimaryNav />
      </div>
    </>
  );
};

export default Header;
